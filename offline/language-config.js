// Auto-detect language from HTML filename
// Supports: index.html (default), index-en.html, index-fr.html, etc.
(function() {
  function detectAndSetLanguage() {
    // Wait for appData to be available
    if (!window.appData) {
      setTimeout(detectAndSetLanguage, 10);
      return;
    }

    // Get the current HTML filename
    const filename = window.location.pathname.split('/').pop() || 'index.html';
    
    // Extract language code from filename pattern: index-{lang}.html
    const match = filename.match(/index-(\w+)\.html$/);
    const detectedLang = match ? match[1] : null;
    
    // Get available languages from appData
    const availableLangs = Object.keys(window.appData);
    
    // Determine which language to use
    let selectedLang = null;
    
    if (detectedLang && availableLangs.includes(detectedLang)) {
      // Use detected language if it exists in appData
      selectedLang = detectedLang;
    } else if (detectedLang) {
      // Language code in filename but not in appData - fallback
      console.warn(`Language '${detectedLang}' not found in appData. Available: ${availableLangs.join(', ')}`);
      selectedLang = availableLangs.includes('id') ? 'id' : (availableLangs[0] || 'en');
    } else {
      // No language in filename (index.html) - use default
      selectedLang = availableLangs.includes('id') ? 'id' : (availableLangs[0] || 'en');
    }
    
    window.currentLanguage = selectedLang;
    console.log(`Language set to: ${selectedLang} (from filename: ${filename})`);
  }
  
  detectAndSetLanguage();
})();
