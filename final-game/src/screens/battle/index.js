import { statusGame } from '../../components/utils/status'
import { pause } from '../../components/utils/pause'
import { battle } from './template/battle.template'
import { Monster } from './components/monster-body'
import { generateBackground } from './components/background'
import { animStand } from './components/animations/anim-stand'
import { modalSpells } from './components/modal-spells'
import { playMute } from '../../components/utils/sound'
import { checkSEnemyLife } from '../../components/utils/checkLife'
import './index.css'
const mainBody = document.querySelector('main')
const body = document.querySelector('body')

window.addEventListener('click', startBattle, false);

export async function startBattle() {
  window.addEventListener('click', startBattle, false);
  if (statusGame.play) {
    statusGame.playerLife = 100
    statusGame.enemyLife = 100
    window.removeEventListener('click', startBattle, false)
    mainBody.style.opacity = '0'
    await pause(550)
    mainBody.innerHTML = await battle;
    await generateBackground(body)
    mainBody.style.opacity = '1'
    const enemy = document.querySelector("#sprite")
    const userName = document.querySelector("#name-user")
    const muteImg = document.querySelector('.mute-sound-img')
    const hero = document.querySelector("#main-hero")
    const monsterNameContiner = document.querySelector('#monster-name')
    const monster = new Monster()
    monsterNameContiner.textContent = monster.name
    monster.generateBody(enemy)
    userName.innerHTML = statusGame.user
    animStand(statusGame, hero)
    muteImg.addEventListener('click', playMute, false)
    checkSEnemyLife()
    await pause(550)
    modalSpells()
  }
}
