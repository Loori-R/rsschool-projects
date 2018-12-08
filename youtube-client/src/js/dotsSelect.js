import {
    dots_block
} from './htmlElem.js'
import {
    createVideoCard
} from './create-result.js'
import {
    count_video_in_page
} from './createDots.js'
export function prevDot(target_dot, next_dot_i) {
    for (let i = 0; i < dots_block.childNodes.length; i++) {
        if (dots_block.childNodes[i].style.background === 'rgb(255, 255, 255)') {
            target_dot = dots_block.childNodes[i]
            next_dot_i = i
        }
        dots_block.childNodes[i].style.background = '#FF2B2B'
    }
    try {
        dots_block.childNodes[next_dot_i - 1].style.background = '#FFF'
        const sum = (+target_dot.id) - (+count_video_in_page)
        createVideoCard(sum, target_dot.id)
    } catch {
        const last = dots_block.childNodes[dots_block.childNodes.length - 1]
        last.style.background = '#FFF'
        try {
            createVideoCard(last.id, (+last.id) + (+count_video_in_page))
        } catch {}
    }
}

export function nextDot(target_dot, next_dot_i) {
    for (let i = 0; i < dots_block.childNodes.length; i++) {
        if (dots_block.childNodes[i].style.background === 'rgb(255, 255, 255)') {
            target_dot = dots_block.childNodes[i]
            next_dot_i = i
        }
        dots_block.childNodes[i].style.background = '#FF2B2B'
    }
    try {
        dots_block.childNodes[next_dot_i + 1].style.background = '#FFF'
        const sum = (+target_dot.id) + (+count_video_in_page)
        const sum2 = +sum + (+count_video_in_page)
        createVideoCard(sum, sum2)
    } catch {
        const last = dots_block.childNodes[0]
        last.style.background = '#FFF'
        try {
            createVideoCard(1, +count_video_in_page + 1)
        } catch {}
    }
}
