import {
    leftSwipe,
    rightSwipe
} from './anim-swipe.js'
let down = 0;
let up = 0;

export function mouseDown(e) {
    if (e.which != 1) {
        return
    }
    down = e.clientX
}

export function mouseUp(e) {
    if (e.which != 1) {
        return
    }
    up = e.clientX
    if (down - up > 200) {
        leftSwipe()
    }
    if (up - down > 200) {
        rightSwipe()
    }
}
