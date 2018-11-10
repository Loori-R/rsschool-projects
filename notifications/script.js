const message = [
    'Most children are taught that the human body has five senses: sight, hearing, touch, taste, and smell. But many neurologists identify nine or more senses, and some list as many as 21.',
    
    'The first five recognized dwarf planets are Ceres, Pluto, Eris, Makemake and Haumea. Scientists believe there may be dozens or even more than 100 dwarf planets awaiting discovery. The IAU recognized Pluto\'s special place in our solar system by designating dwarf planets that orbit the sun beyond Neptune as plutoids.',
    
    'Whales are mammals who have no sweat glands, but then since they live in the water, they don\'t really need them.',
    
    'Junko Tabei may appear slight, almost fragile looking, but the Japanese mountaineer has a steely determination that helped her to become the first woman to reach Everest\'s apex. In 1975, Tabei was chosen as one of 15 in the first all-female team to take on the mountain.',
    
    'Ipso facto is a Latin phrase, directly translated as "by the fact itself," which means that a certain phenomenon is a direct consequence, a resultant effect, of the action in question, instead of being brought about by a previous action. It is a term of art used in philosophy, law, and science.',

    'Roughly 80 percent of millionaires in America are the first generation of their family to be rich. They didn\'t inherit their wealth; they earned it.',

    'Cats Don\'t Taste Sweet, But Dogs Taste Salty. We have discussed recently the reasons organisms taste their food are related to nutritional needs (sweet, umami, salt, fat) and protection from toxins (sour, bitter).'
]
const notice = document.querySelector('aside.notifications')
const close = document.querySelector('hr.close')
const text = document.querySelector('div.useful-text')
const continer_dots = document.querySelector('div.continer-dots')

text.innerHTML = message[0]

setTimeout(()=>{notice.style.opacity = '1'},5000)

close.onclick = ()=>{notice.style.opacity = '0'}

const create_dots = (arr) =>{
let length = arr.length
if(length>13){length = 13}
for(let i = 0;i<length;i++){
const dot = document.createElement('LI');
dot.className = "dots"
dot.id = i
if(i === 0){dot.style.backgroundColor='#333'}
continer_dots.appendChild(dot)
}
}

continer_dots.onclick = (e)=>{ 
    const target = e.target;
    if (target.tagName != 'LI') return;   
    continer_dots.childNodes.forEach((elem,indx)=>{
     if(indx === 0){return}
    elem.style.backgroundColor='#fff'
  });          
  target.style.backgroundColor = '#333'
  console.log(target.id)
  text.innerHTML = message[target.id]
  };

  create_dots(message)