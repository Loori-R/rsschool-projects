import { mainAudio } from '../../components/utils/sound'
import { createMenu } from './components/create-elem-menu'
import './index.css';

const mainTheme = mainAudio('WindsOfStories.mp3')

createMenu()
window.addEventListener('load', mainTheme, false)
