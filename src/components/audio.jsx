// audioUtils.jsx
const soundMap = {
  click: `${import.meta.env.BASE_URL}assets/audio/click.mp3`,
  correct: `${import.meta.env.BASE_URL}assets/audio/correct.mp3`,
  wrong: `${import.meta.env.BASE_URL}assets/audio/wrong.mp3`,
};

export function playSound(type) {
  const src = soundMap[type];
  if (!src) return;
  const audio = new Audio(src);
  audio.play().catch((err) => {
    console.error(`Failed to play sound "${type}":`, err);
  });
}

