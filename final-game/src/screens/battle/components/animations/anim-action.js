export const animAction = (hero, vertical) => {
  let count = 2700
  const step = 300
  const animInterval = setInterval(() => {
    count -= step
    if (count <= 0) {
      clearInterval(animInterval)
    }
    hero.style.backgroundPosition = -1 * count + 'px ' + vertical + 'px';
  }, 70)
}