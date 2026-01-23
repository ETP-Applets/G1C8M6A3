// audioUtils.jsx
const soundMap = {
  click: './public/assets/audio/click.mp3',
  correct: './public/assets/audio/correct.mp3',
  wrong: './public/assets/audio/wrong.mp3'
};
function playSound(type) {
  const src = soundMap[type];
  if (!src) return;
  const audio = new Audio(src);
  audio.play().catch(err => {
    console.error(`Failed to play sound "${type}":`, err);
  });
}

window.playSound = playSound;