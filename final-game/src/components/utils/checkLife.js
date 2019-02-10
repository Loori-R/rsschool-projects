import './FLOSS'
import { statusGame } from './status'
import { startBattle } from '../../screens/battle/index'

export const checkSEnemyLife = () => {
    FLOSS({
        name: 'enemyLife',
        value: 100,
        action: () => {
            if (statusGame.enemyLife < 5) {
                statusGame.playerLife = 100
                statusGame.play = false;
                statusGame.score += 10;
                swal({
                    className: "winner",
                    title: `Хорошая работа, ${statusGame.user}!`,
                    text: `у тебя уже ${statusGame.score} очков!`,
                    icon: "success",
                    button: false,
                    timer: 3700,
                }).then(async () => {
                    statusGame.play = true
                    startBattle()
                })

            }
            const enemyLife = document.querySelector("#hp-enemy")
            enemyLife.style.boxShadow = `inset ${statusGame.enemyLife * 3}px 0 0 #D03E42`
        },
        bind: statusGame
    })
}