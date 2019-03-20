import { RandomName } from './monster-name'

export class Monster {
    constructor() {
        this.allMoster = ['ork', 'robber', 'warrior']
        this.oneMonster = _.random(0, 2)
        this.bodyPart = [0, -300, -600]
        this.head = _.random(0, 2)
        this.body = _.random(0, 2)
        this.leftHand = _.random(0, 2)
        this.rightHand = _.random(0, 2)
        this.weapon = _.random(0, 2)
        this.footer = _.random(0, 2)
        this.name = RandomName(this.allMoster[this.oneMonster])
    }

    generateBody(elem) {
        elem.style.background = `
        url('images/${this.allMoster[this.oneMonster]}.png') ${this.bodyPart[this.weapon]}px -1200px,
        url('images/${this.allMoster[this.oneMonster]}.png') ${this.bodyPart[this.head]}px -300px,
        url('images/${this.allMoster[this.oneMonster]}.png') ${this.bodyPart[this.leftHand]}px -900px,
        url('images/${this.allMoster[this.oneMonster]}.png') ${this.bodyPart[this.body]}px 0px,
        url('images/${this.allMoster[this.oneMonster]}.png') ${this.bodyPart[this.rightHand]}px -600px,
        url('images/${this.allMoster[this.oneMonster]}.png') ${this.bodyPart[this.footer]}px -1500px`
    }
}