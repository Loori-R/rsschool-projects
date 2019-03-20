import { animAction } from './animations/anim-action'
import { soundClick } from '../../../components/utils/sound'
import { animSpells } from './animations/anim-spells'
import { animStand } from './animations/anim-stand'
import { pause } from '../../../components/utils/pause'

const effects = async (status, hero, action, sound, soundSpeed, spell, damage) => {
    clearInterval(status.animation)
    animAction(hero, action)
    soundClick(sound, soundSpeed)
    if (spell !== undefined) {
        animSpells(spell)
        status.enemyLife -= damage
    }
    await pause(550)
    animStand(status, hero)
}

export default effects