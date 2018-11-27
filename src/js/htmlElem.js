import {
    res_data
} from './searchClick.js'

export const loadng = document.createElement('div')
loadng.className = 'load'
loadng.innerHTML = '<hr/><hr/><hr/><hr/>'

export const container = document.createElement('div')
container.className = "video-container"

export const dots_block = document.createElement('div')
dots_block.className = "dots-block"

export const block_button = document.createElement('div')
block_button.className = "block-button"

export const count_page = document.createElement('span')
count_page.className = "count-page"

export const next_page = document.createElement('button')
next_page.className = "button-next"
next_page.textContent = 'more'

export const prev_page = document.createElement('button')
prev_page.disabled = true
prev_page.className = "button-prev"
prev_page.textContent = 'back'
