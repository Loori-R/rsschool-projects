import { enterName } from '../template/enter-name.template'
import { pause } from '../../../components/utils/pause'
import { createMenu } from './create-elem-menu'
import { startGame } from './start-game'

export const showFormPlayerName = async () => {
  const mainBody = document.querySelector('main')
  mainBody.style.opacity = '0'
  await pause(550)
  mainBody.innerHTML = await enterName
  const inputName = document.querySelector('input')
  inputName.focus()
  mainBody.style.opacity = '1'
  back.addEventListener('click', createMenu, false)
  fight.addEventListener('click', startGame, false)
}
