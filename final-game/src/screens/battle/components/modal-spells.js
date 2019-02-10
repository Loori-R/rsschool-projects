import swal from 'sweetalert';
import { Edible } from '../../../components/tasks/Edible/index'
import { EngToRus } from '../../../components/tasks/EngToRus/index'
import { Geometric } from '../../../components/tasks/Geometry/index'
import { MathActions } from '../../../components/tasks/MathActions/index'
import { enemyAttack } from './animations/anim-enemy'
import effects from './run-effect'
import { statusGame } from '../../../components/utils/status'

export const modalSpells = async () => {
    if (!statusGame.play) { return }
    const hero = document.getElementById('main-hero')
    const clank = () => { effects(statusGame, hero, -900, 'clank-cartoon.wav', 4, -900, 10) }
    const firespell = () => { effects(statusGame, hero, -300, 'firespell1.wav', 2, -300, 20) }
    const fireblue = () => { effects(statusGame, hero, -1200, 'firespell2.wav', 1.5, 0, 30) }
    const foom = () => { effects(statusGame, hero, -300, 'foom1.wav', 1.5, -600, 40) }
    const edible = new Edible();
    const engToRus = new EngToRus();
    const geometry = new Geometric()
    const math = new MathActions()
    swal("Выбор заклинания", {
        className: 'container-modal-dialog',
        buttons: {
            clank: {
                className: 'spell-modal-dialog clank',
                text: ""
            },
            firespell: {
                className: 'spell-modal-dialog firespell',
                text: ""
            },
            foom: {
                className: 'spell-modal-dialog foom',
                text: ""
            },
            fireblue: {
                className: 'spell-modal-dialog fireblue',
                text: ""
            },
        },
    }).then(async (value) => {
        switch (value) {
            case "firespell":
                engToRus.modal(firespell, enemyAttack, modalSpells)
                break;
            case "foom":
                geometry.modal(foom, enemyAttack, modalSpells)
                break;

            case "fireblue":
                math.modal(fireblue, enemyAttack, modalSpells)
                break;

            default:
                edible.modal(clank, enemyAttack, modalSpells)
        }
    })
}