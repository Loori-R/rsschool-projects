
import { pause } from '../../../../components/utils/pause'
import { statusGame } from '../../../../components/utils/status';
import swal from 'sweetalert';
import effects from '../run-effect'
export const enemyAttack = async () => {
    const enemyContiner = document.querySelector('.enemy-container')
    const enemy = document.querySelector('#sprite')
    const hero = document.getElementById('main-hero')
    enemyContiner.style.transform = 'translateX(-74vw)'
    await pause(1600)
    enemy.style.transform = 'scale(-1, 1) rotate(20deg)'
    effects(statusGame, hero, -600, 'damage.wav', 1)
    await pause(250)
    enemy.style.transform = 'scale(-1, 1) rotate(0)'
    statusGame.playerLife -= (_.shuffle([5, 10, 20, 30]))[0]
    const playerLifeStyle = document.querySelector("#hp-hero")
    playerLifeStyle.style.boxShadow = `inset ${statusGame.playerLife * 3}px 0 0 #D03E42`
    await pause(50)
    enemyContiner.style.transform = 'translateX(0)'
    if (statusGame.playerLife < 5) {
        statusGame.play = false;
        swal({
            title: `Увы, тебя победили, ${statusGame.user}!`,
            text: `ты набрал ${statusGame.score} очков!`,
            icon: "error",
            button: "ОК",
        }).then(() => { location.reload() })
    }
} 