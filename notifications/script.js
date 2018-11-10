/* maximum 13 lines (associated with aesthetics) */
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
const next = document.getElementById('next')
const prev = document.getElementById('prev')

text.innerHTML = message[0]//inner first message

setTimeout(()=>{notice.style.opacity = '1'},0000)//исправить на 5с

close.onclick = ()=>{notice.style.opacity = '0'}//close notice

//add dots
const create_dots = (arr) =>{
let length = arr.length
if(length>13){length = 13}
for(let i = 0;i<length;i++){
const dot = document.createElement('LI');
dot.className = "dots"
dot.id = i
if(i === 0){dot.style.backgroundColor='#333'}//add background style first dot
continer_dots.appendChild(dot)
}
}
create_dots(message)

const dots = continer_dots.childNodes

//clear dots style background
const dots_clear = () =>{
    dots.forEach((elem,indx)=>{
        if(indx === 0){return}
       elem.style.backgroundColor=''
     });  
}
//change text when clicking on points
continer_dots.onclick = (e)=> { 
    const target = e.target;
    if (target.tagName != 'LI') return;        
   
    dots_clear()      

    target.style.backgroundColor = '#333'
    text.innerHTML = message[target.id]
  };
  
  let active = '';//active dot
  
  //arrow next
  next.onclick = () =>{   
  dots.forEach((elem,indx)=>{
    if(indx === 0){return}
    if(elem.style.backgroundColor !== ''){
       return active = indx
    } 
 });    
 dots_clear() 
 if(active === dots.length-1){ 
    active=0}
 text.innerHTML = message[active]
 dots[active+1].style.backgroundColor = '#333'
 }

 //arrow prev
 prev.onclick = () =>{  
    console.log(active)
    dots.forEach((elem,indx)=>{
      if(indx === 0){return}
      if(elem.style.backgroundColor !== ''){
         return active = indx
      } 
   });    
   dots_clear() 
   console.log(active)
   if(active === 1){ 
      active = dots.length }
   text.innerHTML = message[active-2]
   dots[active-1].style.backgroundColor = '#333'
   }