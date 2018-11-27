import {
    res_data
} from './searchClick.js'
import {
    dots_block,
    loadng
} from './htmlElem.js'
import {
    btn
} from './search-form.js';
import {
    createVideoCard
} from './create-result.js'

export let count_video_in_page = 4;

export function createDots() {
    const width_window_medium = document.documentElement.clientWidth < 1320 && document.documentElement.clientWidth > 1024
    const width_window_little = document.documentElement.clientWidth < 1024
    if (width_window_medium) {
        count_video_in_page = 3
    }
    if (width_window_little) {
        count_video_in_page = 1
    }
    let dots = Math.ceil(Object.keys(res_data).length / count_video_in_page)
    let i = 0;
    let c = 1
    while (i < dots) {
        const dot_elem = document.createElement('div')
        dot_elem.className = "dot-elem"
        dot_elem.style.background = '#FF2B2B'
        if (i === 0) {
            dot_elem.style.background = '#fff'
        }
        dot_elem.innerText = i + 1
        dot_elem.id = c
        dots_block.appendChild(dot_elem)
        i++
        c += count_video_in_page
    }
    createVideoCard(1, +count_video_in_page + 1)
    btn.disabled = false
    document.body.removeChild(loadng)
}
