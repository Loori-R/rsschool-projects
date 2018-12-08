import {
    leftSwipe,
    rightSwipe
} from './anim-swipe.js'

let arr_toches = []

export function startTouch() {
    arr_toches = []
}

export function moveTouch(ev) {
    arr_toches.push(ev.touches[0].clientX)
}

export function endTouch() {
    if (arr_toches[0] - arr_toches[arr_toches.length - 1] > 200) {
        leftSwipe()
    }
    if (arr_toches[arr_toches.length - 1] - arr_toches[0] > 200) {
        rightSwipe()
    }
}
