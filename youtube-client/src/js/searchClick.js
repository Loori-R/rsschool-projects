import {
    btn
} from './search-form.js';
import {
    loadng,
    container,
    dots_block,
    next_page,
    prev_page,
    count_page,
    block_button
} from './htmlElem.js';
import {
    searchRes
} from './search-result.js';
import {
    createDots
} from './createDots.js';
export const res_data = {}
export function searchClick(e) {
    document.body.appendChild(loadng)
    btn.disabled = true
    container.innerHTML = ""
    dots_block.innerHTML = ""
    e.preventDefault();
    searchRes(res_data)
    setTimeout(() => {
        createDots()
        count_page.innerText = `1 of ${res_data[1].totalPageToken}`
    }, 1000)
    block_button.appendChild(next_page)
    block_button.appendChild(count_page)
    block_button.appendChild(prev_page)
}
