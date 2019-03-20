export const animStand = (status, hero) => {
  let count = 2700
  const step = 300
  status.animation = setInterval(() => {
    count -= step
    if (count <= 0) {
      count = 2700
    }
    hero.style.backgroundPosition = -1 * count + 'px' + ' 0px';
  }, 50)
}