import { pause } from '../../utils/pause';

export class MathActions {
    constructor() {
        this.MathActions = _.shuffle(['+', '-', '/', '*'])
        this.numberFirst = _.random(1, 20)
        this.numberSecond = _.random(1, 20)
        this.questText = `${this.numberFirst} ${this.MathActions[0]} ${this.numberSecond} = `

        if (this.MathActions[0] === '+') {
            this.answerMath = this.numberFirst + this.numberSecond
        } else if (this.MathActions[0] === '-') {
            this.answerMath = this.numberFirst - this.numberSecond
        } else if (this.MathActions[0] === '/') {
            this.answerMath = _.round(this.numberFirst / this.numberSecond, 1)
        } else if (this.MathActions[0] === '*') {
            this.answerMath = _.round(this.numberFirst * this.numberSecond, 1)
        }
    }
    modal(spell, enemyAttack, modalSpell) {
        swal({
            title: 'Введите верное значение(дроби огруглить)',
            text: this.questText,
            content: {
                element: "input",
                attributes: {
                    autofocus: 'autofucus',
                    placeholder: "Число",
                    type: "number",
                    required: true
                }
            }
        }).then((value) => {
            this.check(value, spell, enemyAttack, modalSpell)
        })
    }

    check(userAnswer, spell, enemyAttack, modalSpell) {
        if (_.round(this.answerMath) === +userAnswer) {
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
