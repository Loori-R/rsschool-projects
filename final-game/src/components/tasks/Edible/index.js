
import { condition } from './condition'
import swal from 'sweetalert';
import { pause } from '../../utils/pause';

export class Edible {
    constructor() {
        this.condition = condition
        this.section = _.random(0, 1) //0 - edible: 1 - not edible
        this.size = _.size(condition[this.section]) - 1
        this.word = _.random(0, this.size)
        this.questText = this.condition[this.section][this.word]
        this.trueAnswer = this.section === 0 ? true : false
    }
    modal(spell, enemyAttack, modalSpell) {
        swal({
            title: 'Это съедобно?',
            text: this.questText,
            buttons: {
                cancel: { text: 'Не съедобное', value: false, visible: true, },
                confirm: { text: 'Съедобное', value: true }
            },
        }).then((value) => { this.check(value, spell, enemyAttack, modalSpell) })
    }

    check(userAnswer, spell, enemyAttack, modalSpell) {
        if (userAnswer === this.trueAnswer) {
            swal({ text: "Правильно!", icon: "success" }).then(async () => {
                spell()
                await pause(1500)
                enemyAttack()
                await pause(3700)
                modalSpell()
            })
        }
        else {
            swal({ text: "Ошибочка вышла!", icon: "error" }).then(async () => {
                enemyAttack()
                await pause(3700)
                modalSpell()
            })
        }
    }
}