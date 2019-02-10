
export const animSpells = (vertical) => {
  const effects = document.getElementById('effects')
  let count = 0
  const step = 300
  const effectInterval = setInterval(() => {
    count += step
    if (count >= 2700) {
      effects.removeAttribute("style");
      clearInterval(effectInterval)
      return
    }
    if (vertical === -900 || vertical === -600) {
      effects.style.left = count / 2.5 + 'px'
    } else {
      effects.style.left = '40vw'
    }
    effects.style.backgroundImage = 'url(images/effect.png)'
    effects.style.backgroundPosition = -1 * count + 'px ' + vertical + 'px';
  }, 70)
}