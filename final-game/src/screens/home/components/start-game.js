import { pause } from '../../../components/utils/pause'
import { statusGame } from '../../../components/utils/status'
export const startGame = async () => {
  const playerName = document.querySelector('input')
  if (!playerName.value) {
    playerName.placeholder = 'Введите Имя!'
    playerName.style.color = 'red'
    await pause(1000)
    playerName.placeholder = ''
    playerName.style.color = '#B29C82'
  } else {
    statusGame.play = true
    statusGame.user = playerName.value
  }
};