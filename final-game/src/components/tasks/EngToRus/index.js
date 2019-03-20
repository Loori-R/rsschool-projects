import { condition } from './condition'
import { pause } from '../../utils/pause';

export class EngToRus {
    constructor() {
        this.condition = condition
        this.word = _.shuffle(condition)
        _.forOwn(this.condition, (value, key) => {
            if (value === this.word[0]) {
                this.questText = key
                this.trueAnswer = this.word[0]
            }
        });
    }

    modal(spell, enemyAttack, modalSpell) {
        swal({
            title: 'Переведите слово',
            text: this.questText,
            content: {
                element: "input",
                attributes: {
                    autofocus: 'autofucus',
                    placeholder: "Перевод",
                    type: "text",
                    required: true
                }
            }
        }).then((value) => {
            this.check(value, spell, enemyAttack, modalSpell)
        })
    }
    check(userAnswer, spell, enemyAttack, modalSpell) {
        const regStart = /^, /
        const regEnd = /,/
        const regUserAnswer = new RegExp(regStart.source + userAnswer + regEnd.source, 'i')
        if (regUserAnswer.test(this.trueAnswer)) {
            swal({ text: "Правильно!", icon: "success" }).then(async () => {
                spell()
                await pause(1500)
                enemyAttack()
                await pause(3700)
                modalSpell()
            });
        }
        else {
            swal({ text: "Ошибочка вышла!", icon: "error" }).then(async () => {
                enemyAttack()
                await pause(3700)
                modalSpell()
            });
        }
    }
}