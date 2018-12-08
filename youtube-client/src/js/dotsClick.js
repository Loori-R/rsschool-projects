import {
    dots_block
} from './htmlElem.js'
import {
    createVideoCard
} from './create-result.js'
import {
    count_video_in_page
} from './createDots.js'
import {
    container
} from './htmlElem.js';
export function dotsClick(event) {
    const target = event.target;
    if (target.className !== 'dot-elem') {
        return
    }
    for (let i = 0; i < dots_block.childNodes.length; i++) {
        dots_block.childNodes[i].style.background = '#FF2B2B'
    }
    container.style.left = '-100vw'
    setTimeout(() => {
        container.style.opacity = '0'
    }, 250)
    setTimeout(() => {
        target.style.background = '#fff'
        createVideoCard(target.id, (+count_video_in_page) + (+target.id))
        container.style.left = '100vw'
        container.style.opacity = '1'
    }, 300)
    setTimeout(() => {
        container.style.left = '0vw'
    }, 350)
};
