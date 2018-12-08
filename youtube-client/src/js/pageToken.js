import {
    btn
} from './search-form.js';
import {
    loadng,
    container,
    dots_block,
    block_button,
    next_page,
    prev_page,
    count_page
} from './htmlElem.js';
import {
    searchRes
} from './search-result.js';
import {
    createDots
} from './createDots.js';
import {
    createVideoCard
} from './create-result.js'
import {
    res_data
} from './searchClick.js'
import {
    count_video_in_page
} from './createDots.js'

let count_click_token = 1

export function getPrevPage(e) {
    next_page.disabled = true
    prev_page.disabled = true
    e.preventDefault();
    count_click_token--
    console.log(count_click_token)
    next_page.disabled = false
    document.body.appendChild(loadng)
    btn.disabled = true
    container.innerHTML = ""
    dots_block.innerHTML = ""
    count_page.innerText = `${count_click_token} of ${res_data[1].totalPageToken}`
    searchRes(res_data, res_data[1].prevPageToken)
    setTimeout(() => {
        createDots()
        createVideoCard(1, +count_video_in_page + 1)
        btn.disabled = false
        if (count_click_token !== 1) {
            prev_page.disabled = false
            next_page.disabled = false
        }
    }, 1000)
}
export function getNextPage(e) {
    next_page.disabled = true
    prev_page.disabled = true
    e.preventDefault();
    count_click_token++
    prev_page.disabled = false
    document.body.appendChild(loadng)
    btn.disabled = 'true'
    container.innerHTML = ""
    dots_block.innerHTML = ""
    count_page.innerText = `${count_click_token} of ${res_data[1].totalPageToken}`
    block_button.appendChild(count_page)
    block_button.appendChild(prev_page)
    searchRes(res_data, res_data[1].nextPageToken)
    setTimeout(() => {
        createDots()
        createVideoCard(1, +count_video_in_page + 1)
        btn.disabled = false
        if (count_click_token !== res_data[1].totalPageToken) {
            next_page.disabled = false
            prev_page.disabled = false
        }
    }, 1000)
}
