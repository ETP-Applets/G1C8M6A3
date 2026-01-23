// conversion.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OFFLINE_DIR = path.join(__dirname, 'src1');
const OUTPUT_DIR = path.join(__dirname, 'offline');
const PUBLIC_DIR = path.join(__dirname, 'public');

// Track all React hooks used across all files
const allReactHooks = new Set(['useState', 'useEffect', 'useRef', 'useCallback', 'useMemo', 'StrictMode']);

// Track dependencies dynamically
const dependencies = {
  components: {},  // Will hold subdirectories like layouts, pages, states
  rootFiles: [],   // Files in offline root (not App.js or main.js)
  app: null,
  main: null
};

/**
 * Copy directory recursively
 */
function copyDirectorySync(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️  Source directory not found: ${src}`);
    return false;
  }
  
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  
  return true;
}

/**
 * Extract component name from file path
 */
function getComponentName(filePath, relativePath) {
  const fileName = path.basename(filePath, '.js');
  
  // Special cases
  if (fileName === 'App') return 'App';
  if (fileName.startsWith('page')) {
    const num = fileName.replace('page', '').replace('Lift', '');
    if (fileName.endsWith('Lift')) {
      return `Page${num}Lift`;
    }
    return `Page${num}`;
  }
  if (fileName.startsWith('layout')) {
    const num = fileName.replace('layout', '');
    return `Layout${num}`;
  }
  if (fileName === 'traingle' || fileName === 'triangle') return 'InteractiveTriangle';
  
  // Convert to PascalCase
  const pascalCase = fileName
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  return pascalCase || fileName.charAt(0).toUpperCase() + fileName.slice(1);
}

/**
 * Convert import statements to global variable access
 */
function convertImports(content, filePath, relativePath, isAppFile) {
  const lines = content.split('\n');
  const convertedLines = [];
  const reactHooks = new Set();
  let hasReactImport = false;
  let hasReactDOMImport = false;
  let needsMotion = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip import statements
    if (line.startsWith('import ')) {
      // Extract React hooks
      const reactHookMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]react['"]/);
      if (reactHookMatch) {
        const hooks = reactHookMatch[1].split(',').map(h => h.trim());
        hooks.forEach(hook => {
          const cleanHook = hook.replace(/\s+as\s+\w+/, '');
          reactHooks.add(cleanHook);
          allReactHooks.add(cleanHook);
        });
        hasReactImport = true;
      }
      
      if (line.match(/import\s+React\s+from\s*['"]react['"]/)) {
        hasReactImport = true;
      }
      
      if (line.match(/import\s+.*\s+from\s*['"]react-dom/)) {
        hasReactDOMImport = true;
      }
      
      if (line.includes('motion')) {
        needsMotion = true;
      }
      
      continue;
    }
    
    convertedLines.push(lines[i]);
  }
  
  // Only add declarations if this is App.js
  if (isAppFile) {
    let insertIndex = 0;
    
    // Find first non-comment, non-empty line
    for (let i = 0; i < convertedLines.length; i++) {
      const trimmed = convertedLines[i].trim();
      if (trimmed && !trimmed.startsWith('//') && !trimmed.startsWith('/*')) {
        insertIndex = i;
        break;
      }
    }
    
    const hookDeclarations = [];
    
    // Add ALL React hooks
    const allHooksArray = Array.from(allReactHooks).sort();
    hookDeclarations.push(`const { ${allHooksArray.join(', ')} } = React;`);
    hookDeclarations.push(`const { createRoot } = ReactDOM;`);
    hookDeclarations.push(`const { motion } = window.Motion || {};`);
    
    if (hookDeclarations.length > 0) {
      convertedLines.splice(insertIndex, 0, ...hookDeclarations, '');
    }
  }
  
  // Replace import.meta.env.BASE_URL with relative paths
  let convertedContent = convertedLines.join('\n');
  convertedContent = convertedContent.replace(
    /`\$\{import\.meta\.env\.BASE_URL\}([^`]+)`/g,
    (match, assetPath) => {
      const cleanPath = assetPath.replace(/^\//, '');
      return `'./public/${cleanPath}'`;
    }
  );
  
  return {
    content: convertedContent,
    reactHooks: Array.from(reactHooks),
    hasReactImport,
    hasReactDOMImport,
    needsMotion
  };
}

/**
 * Convert export statements to global assignments
 */
function convertExports(content, componentName) {
  content = content.replace(
    /export\s+default\s+(\w+);?/g,
    (match, varName) => {
      return `window.${componentName} = ${varName};`;
    }
  );
  
  content = content.replace(
    /export\s+function\s+(\w+)/g,
    (match, funcName) => {
      return `function ${funcName}`;
    }
  );
  
  if (content.includes('function playSound') && !content.includes('window.playSound')) {
    content += '\n\nwindow.playSound = playSound;';
  }
  
  return content;
}

/**
 * Process a single file
 */
function processFile(filePath) {
  const relativePath = path.relative(OFFLINE_DIR, filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  const componentName = getComponentName(filePath, relativePath);
  
  const isAppFile = path.basename(filePath) === 'App.js';
  
  const { content: contentAfterImports } = 
    convertImports(content, filePath, relativePath, isAppFile);
  
  let finalContent = convertExports(contentAfterImports, componentName);
  
  // Categorize file for loading order
  const dirName = path.dirname(relativePath);
  const fileName = path.basename(relativePath);
  
  // SKIP if file is in libs folder - libs are loaded separately at the top
  if (dirName.includes('libs') || relativePath.startsWith('libs')) {
    // Don't process libs files as components
    const outputPath = path.join(OUTPUT_DIR, relativePath);
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputPath, finalContent, 'utf8');
    
    return {
      componentName,
      relativePath,
      skipped: true
    };
  }
  
  if (fileName === 'App.js') {
    dependencies.app = relativePath;
  } else if (fileName === 'main.js') {
    dependencies.main = relativePath;
  } else if (dirName.includes('components')) {
    const subdir = dirName.split(path.sep)[1];
    if (subdir) {
      if (!dependencies.components[subdir]) {
        dependencies.components[subdir] = [];
      }
      dependencies.components[subdir].push(relativePath);
    }
  } else if (dirName === '.') {
    dependencies.rootFiles.push(relativePath);
  } else {
    if (!dependencies.components[dirName]) {
      dependencies.components[dirName] = [];
    }
    dependencies.components[dirName].push(relativePath);
  }
  
  // Write converted file
  const outputPath = path.join(OUTPUT_DIR, relativePath);
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(outputPath, finalContent, 'utf8');
  
  return {
    componentName,
    relativePath
  };
}

/**
 * Generate HTML file with proper script loading order
 */
function generateHTML() {
  // Get all .js files from libs folder
  const libsPath = path.join(OUTPUT_DIR, 'libs');
  
  let libScripts = '';
  
  if (fs.existsSync(libsPath)) {
    // Define exact load order
    const loadOrder = [
      'react.development.js',
      'react-dom.development.js',
      'babel.min.js',
      'motion-cdn.js',
      'tailwind-cdn.js'
    ];
    
    // Get all .js files from libs folder
    const allLibFiles = fs.readdirSync(libsPath).filter(file => file.endsWith('.js'));
    
    // Sort according to loadOrder
    const sortedLibFiles = allLibFiles.sort((a, b) => {
      const indexA = loadOrder.indexOf(a);
      const indexB = loadOrder.indexOf(b);
      
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    });
    
    libScripts = sortedLibFiles.map(file => `    <script src="./libs/${file}"></script>`).join('\n');
  } else {
    libScripts = '    <!-- ⚠️ WARNING: libs folder not found! -->';
    console.error('❌ ERROR: libs folder not found in output directory!');
  }
  
  // Build component script tags
  let componentScripts = '';
  
  const priorityOrder = ['layouts', 'pages', 'states'];
  const processedDirs = new Set();
  
  for (const dir of priorityOrder) {
    if (dependencies.components[dir]) {
      componentScripts += `\n    <!-- ${dir} -->\n`;
      const sorted = dependencies.components[dir].sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        return numA - numB;
      });
      componentScripts += sorted.map(file => `    <script src="./${file}"></script>`).join('\n');
      processedDirs.add(dir);
    }
  }
  
  for (const [dir, files] of Object.entries(dependencies.components)) {
    if (!processedDirs.has(dir)) {
      componentScripts += `\n    <!-- ${dir} -->\n`;
      componentScripts += files.map(file => `    <script src="./${file}"></script>`).join('\n');
    }
  }
  
  if (dependencies.rootFiles.length > 0) {
    componentScripts += `\n    <!-- Root level components -->\n`;
    componentScripts += dependencies.rootFiles.map(file => `    <script src="./${file}"></script>`).join('\n');
  }
  
  // Find CSS files
  const cssFiles = [];
  if (fs.existsSync(OUTPUT_DIR)) {
    const files = fs.readdirSync(OUTPUT_DIR);
    files.forEach(file => {
      if (file.endsWith('.css')) {
        cssFiles.push(file);
      }
    });
  }
  
  const cssLinks = cssFiles.map(file => `    <link rel="stylesheet" href="./${file}" />`).join('\n');
  
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Offline Applet</title>
    
    <!-- Load Libraries (Local) -->
${libScripts}
    
    <script>
      // Make motion components available globally
      if (window.Motion && window.Motion.motion) {
        window.motion = window.Motion.motion;
      } else if (window.Motion) {
        window.motion = {
          polygon: React.forwardRef((props, ref) => {
            const { initial, animate, transition, onAnimationComplete, ...rest } = props;
            return React.createElement('polygon', { ...rest, ref });
          }),
          text: React.forwardRef((props, ref) => {
            const { initial, animate, transition, onAnimationComplete, ...rest } = props;
            return React.createElement('text', { ...rest, ref });
          }),
          div: React.forwardRef((props, ref) => {
            const { initial, animate, transition, onAnimationComplete, ...rest } = props;
            return React.createElement('div', { ...rest, ref });
          })
        };
      }
    </script>
    
    <!-- Load Data -->
    <script src="./public/data_id.js"></script>
    
    <!-- Load CSS files -->
${cssLinks || '    <!-- No CSS files found -->'}
    
    <!-- Load Components -->
${componentScripts}
    
    <!-- Main App -->
${dependencies.app ? `    <script src="./${dependencies.app}"></script>` : ''}
    
    <!-- Entry point -->
${dependencies.main ? `    <script src="./${dependencies.main}"></script>` : ''}
</head>
<body>
    <div id="root"></div>
</body>
</html>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), htmlContent, 'utf8');
}

/**
 * Fix main.js
 */
function fixMainJS() {
  const mainPath = path.join(OUTPUT_DIR, 'main.js');
  if (fs.existsSync(mainPath)) {
    let content = fs.readFileSync(mainPath, 'utf8');
    
    content = content.replace(/import\s+App\s+from\s*['"].*App\.jsx['"];?/g, '');
    content = content.replace(/React\.createElement\(App/g, 'React.createElement(window.App');
    
    if (!content.includes('DOMContentLoaded')) {
      content = `document.addEventListener('DOMContentLoaded', function() {\n${content}\n});`;
    }
    
    fs.writeFileSync(mainPath, content, 'utf8');
  }
}

/**
 * Fix audio.js paths
 */
function fixAudioJS() {
  const audioPath = path.join(OUTPUT_DIR, 'components', 'audio.js');
  if (fs.existsSync(audioPath)) {
    let content = fs.readFileSync(audioPath, 'utf8');
    
    content = content.replace(
      /`\$\{import\.meta\.env\.BASE_URL\}assets\/audio\/([^`]+)`/g,
      "'./public/assets/audio/$1'"
    );
    
    if (!content.includes('window.playSound')) {
      if (!content.includes('window.playSound = playSound')) {
        content += '\n\nwindow.playSound = playSound;';
      }
    }
    
    fs.writeFileSync(audioPath, content, 'utf8');
  }
}

/**
 * Copy CSS files from src or other locations
 */
function copyCSSFiles() {
  const cssSearchPaths = [
    path.join(__dirname, 'src'),
    path.join(__dirname, 'offline'),
    path.join(__dirname, 'offline-applet', 'styles'),
    path.join(__dirname, 'styles'),
    __dirname
  ];
  
  let copiedCount = 0;
  
  for (const searchPath of cssSearchPaths) {
    if (!fs.existsSync(searchPath)) continue;
    
    const files = fs.readdirSync(searchPath);
    files.forEach(file => {
      if (file.endsWith('.css')) {
        const srcPath = path.join(searchPath, file);
        const destPath = path.join(OUTPUT_DIR, file);
        
        if (!fs.existsSync(destPath)) {
          fs.copyFileSync(srcPath, destPath);
          console.log(`✓ Copied CSS: ${file} from ${path.relative(__dirname, searchPath)}`);
          copiedCount++;
        }
      }
    });
  }
  
  if (copiedCount === 0) {
    console.warn('⚠️  No CSS files found');
  }
}

/**
 * Copy libs folder if exists
 */
function copyLibsFolder() {
  const libsSearchPaths = [
    path.join(__dirname, 'libs'),
    path.join(__dirname, 'offline-applet', 'libs'),
    path.join(__dirname, 'offline', 'libs')
  ];
  
  for (const libsPath of libsSearchPaths) {
    if (fs.existsSync(libsPath)) {
      const destPath = path.join(OUTPUT_DIR, 'libs');
      copyDirectorySync(libsPath, destPath);
      console.log(`✓ Copied libs folder from ${path.relative(__dirname, libsPath)}`);
      return true;
    }
  }
  
  console.log('⚠️  No libs folder found!');
  return false;
}

/**
 * Main conversion function
 */
function convert() {
  console.log('🚀 Starting conversion...\n');
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Copy public folder
  console.log('📁 Copying public folder...');
  const publicDestPath = path.join(OUTPUT_DIR, 'public');
  if (copyDirectorySync(PUBLIC_DIR, publicDestPath)) {
    console.log('✓ Public folder copied\n');
  }
  
  // Copy libs folder
  console.log('📚 Copying libs folder...');
  copyLibsFolder();
  console.log('');
  
  // Copy CSS files
  console.log('🎨 Copying CSS files...');
  copyCSSFiles();
  console.log('');
  
  // Find and process all JS files
  function findJSFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findJSFiles(filePath, fileList);
      } else if (file.endsWith('.js')) {
        fileList.push(filePath);
      }
    });
    return fileList;
  }
  
  const jsFiles = findJSFiles(OFFLINE_DIR);
  console.log(`📝 Found ${jsFiles.length} JavaScript files to convert\n`);
  
  // Process each file
  const processedFiles = [];
  jsFiles.forEach(file => {
    try {
      const result = processFile(file);
      if (!result.skipped) {
        processedFiles.push(result);
        console.log(`✓ ${path.relative(OFFLINE_DIR, file)} → ${result.componentName}`);
      }
    } catch (error) {
      console.error(`✗ Error: ${file}`, error.message);
    }
  });
  
  console.log('');
  
  // Fix special files
  fixMainJS();
  fixAudioJS();
  
  // Generate HTML
  generateHTML();
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Conversion Complete!');
  console.log('='.repeat(50));
  console.log(`📦 Output: ${OUTPUT_DIR}`);
  console.log(`📄 HTML: ${path.join(OUTPUT_DIR, 'index.html')}`);
  console.log(`📊 Files: ${processedFiles.length} converted`);
  console.log('\n🎉 Ready to use! Open index.html in a browser');
  console.log('💡 Works 100% offline - no internet needed!');
}

// Run conversion
convert();