import confetti from 'canvas-confetti';

export const triggerMiniConfetti = () => {
  confetti({
    particleCount: 35,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#0284c7', '#38bdf8', '#22c55e', '#facc15'],
  });
};

export const triggerVictoryConfetti = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 45 * (timeLeft / duration);
    // two bursts from corners
    confetti({
      ...defaults,
      particleCount,
      origin: { x: 0.15, y: 0.5 },
      colors: ['#0284c7', '#38bdf8', '#22c55e', '#eab308', '#ec4899'],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: 0.85, y: 0.5 },
      colors: ['#0284c7', '#38bdf8', '#22c55e', '#eab308', '#ec4899'],
    });
  }, 250);
};
