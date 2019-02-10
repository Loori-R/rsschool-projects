import { pause } from '../../../components/utils/pause'
import { showFormPlayerName } from './show-input-name'
import { menu } from '../template/menu.template'
import {playMute } from '../../../components/utils/sound'

export const createMenu = async () => {
  const mainBody = document.querySelector('main')
  mainBody.style.opacity = '0'
  await pause(550)
  mainBody.innerHTML = await menu;
  mainBody.style.opacity = '1'
  play.addEventListener('click', showFormPlayerName, false)
  about.addEventListener('click', playMute, false)
};