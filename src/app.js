import './style/base.css';
import './style/preloader.css';
import {
    init
} from './js/init';
import {
    loadng,
    dots_block,
    container,
    next_page,
    prev_page
} from './js/htmlElem';
import {
    searchClick
} from './js/searchClick';
import {
    mouseUp,
    mouseDown
} from './js/mouse-swipe';
import {
    btn
} from './js/search-form';
import {
    dotsClick
} from './js/dotsClick';
import {
    startTouch,
    moveTouch,
    endTouch
} from './js/touch-swipe';
import {
    getNextPage,
    getPrevPage
} from './js/pageToken';
document.body.appendChild(loadng)
window.onload = () => {
    init()
    document.body.removeChild(loadng)
}

btn.addEventListener('click', searchClick);
dots_block.addEventListener('click', dotsClick)
container.addEventListener('mousedown', mouseDown)
container.addEventListener('mouseup', mouseUp)
container.addEventListener('touchmove', moveTouch)
container.addEventListener('touchend', endTouch)
container.addEventListener('touchstart', startTouch)
prev_page.addEventListener('click', getPrevPage)
next_page.addEventListener('click', getNextPage)
