import { pause } from '../../utils/pause';

export class Geometric {
    constructor() {
        this.indexQuest = _.random(0, 3)
        this.width = _.random(5, 10)
        this.height = _.random(1, 5)
        this.cirle = _.random(1, 10)
        if (this.indexQuest === 0) {
            this.questText = `Прямоугольник со сторонами ${this.width}x${this.height}, найти Периметр = `
            this.answerGeometric = 2 * (this.width + this.height)
        } else if (this.indexQuest === 1) {
            this.questText = `Прямоугольник со сторонами ${this.width}x${this.height}, найти Площадь = `
            this.answerGeometric = this.width * this.height
        } else if (this.indexQuest === 2) {
            this.questText = `Радиус круга ${this.cirle}, найти Диаметр = `
            this.answerGeometric = 2 * this.cirle
        } else if (this.indexQuest === 3) {
            this.questText = `Диаметр круга ${this.cirle}, найти Радиус = `
            this.answerGeometric = this.cirle / 2
        }
    }
    modal(spell, enemyAttack, modalSpell) {
        swal({
            title: 'Введите верное значение',
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
        if (this.answerGeometric === +userAnswer) {
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