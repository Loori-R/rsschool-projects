
export const generateBackground = (obj) => {
  const img = _.random(1, 9)
  obj.style.background = `url('images/background/${img}.png')`
}