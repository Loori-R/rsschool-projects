import {
    dots_block,
    block_button,
    container,
} from './htmlElem.js';
import {
    res_data
} from './searchClick.js'
export function createVideoCard(start, end) {
    container.innerHTML = ""
    for (let i = start; i < end; i++) {
        const video_card = document.createElement('div')
        video_card.className = "video-card"
        try {
            const thumb = document.createElement('img')
            thumb.setAttribute('src', res_data[i].thumb)

            const link = document.createElement('a')
            link.setAttribute('href', res_data[i].link)
            link.setAttribute('target', '_blank')
            link.appendChild(thumb)

            const title = document.createElement('h1')
            title.innerHTML = `<a href=${link} target=_blank>${res_data[i].title}</a>`

            const author = document.createElement('span')
            author.innerText = 'Author: ' + res_data[i].author
            author.className = "video-author"

            const date = document.createElement('span')
            date.innerText = 'Published at: ' + res_data[i].date
            date.className = "video-date"

            const descr = document.createElement('span')
            descr.innerText = res_data[i].descr
            descr.className = "video-descr"

            const view = document.createElement('span')
            view.innerText = res_data[i].view + ' viewed'
            view.className = "video-view"

            video_card.appendChild(link)
            video_card.appendChild(title)
            video_card.appendChild(author)
            video_card.appendChild(view)
            video_card.appendChild(date)
            video_card.appendChild(descr)
            container.appendChild(video_card)
        } catch {}
    }

    document.body.appendChild(container)
    document.body.appendChild(dots_block)
    document.body.appendChild(block_button)
}
