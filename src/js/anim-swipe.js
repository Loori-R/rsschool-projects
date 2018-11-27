import {
    nextDot,
    prevDot
} from './dotsSelect.js';
import {
    container
} from './htmlElem.js';
let target_dot = 0;
let next_dot_i = 0;
export function leftSwipe() {
    container.style.left = '-100vw'
    setTimeout(() => {
        container.style.opacity = '0'
    }, 250)
    setTimeout(() => {
        nextDot(target_dot, next_dot_i)
        container.style.left = '100vw'
        container.style.opacity = '1'
    }, 300)
    setTimeout(() => {
        container.style.left = '0vw'
    }, 350)
}

export function rightSwipe() {
    container.style.left = '100vw'
    setTimeout(() => {
        container.style.opacity = '0'
    }, 250)
    setTimeout(() => {
        prevDot(target_dot, next_dot_i)
        container.style.left = '-100vw'
        container.style.opacity = '1'
    }, 300)
    setTimeout(() => {
        container.style.left = '0vw'
    }, 350)
}
