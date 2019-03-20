const audio = new Audio();
export const soundClick = (src, speed) => {
    audio.src = `sounds/${src}`;
    audio.playbackRate = speed;
    audio.autoplay = true;
    audio.loop = false
}

const main = new Audio();
export const mainAudio = (src, play) => {
    main.src = `sounds/${src}`;
    main.autoplay = true;
    main.loop = true
    play ? main.pause() : play = false
}

export const playMute = (e) => {
    e.target.classList.toggle("muted")
    if (_.has(e.target.classList, '1')) {
        mainAudio('WindsOfStories.mp3', 'pause')
        audio.volume = 0
    }
    else {
        mainAudio('WindsOfStories.mp3')
        audio.volume = 1
    }
}