import {search_res} from './search-result.js';
import{btn} from './search-form.js'; 
const res_data = {}

const container = document.createElement('div')    
container.className = "video-container"

const dots_block = document.createElement('div') 
dots_block.className = "dots-block"
let count_video_in_page = 4;

btn.onclick = (e) => {
    btn.disabled = 'true'   
    container.innerHTML = "" 
    dots_block.innerHTML = "" 
    e.preventDefault();  
  search_res(res_data)
  setTimeout(()=>{    
    const width_window_medium = document.documentElement.clientWidth < 1320 && document.documentElement.clientWidth > 1024
    const width_window_little = document.documentElement.clientWidth < 1024
    if(width_window_medium){count_video_in_page = 3}
    if(width_window_little){count_video_in_page = 1}

    let dots = Math.ceil(Object.keys(res_data).length/count_video_in_page)
    let i = 0;
    let c = 1
    while (i<dots) {       
        const dot_elem = document.createElement('div') 
        dot_elem.className = "dot-elem"
       dot_elem.style.background = '#FF2B2B'
        if(i===0){dot_elem.style.background = '#fff'}
        dot_elem.innerText = i+1      
        dot_elem.id = c
        dots_block.appendChild(dot_elem)
        i++
        c+=count_video_in_page
    }    
    create_video_card (1,+count_video_in_page+1)
    btn.disabled = false    
  },1000)       
 
}

dots_block.onclick = (event) =>{      
    const target = event.target;  
    if (target.className !== 'dot-elem'){ return}   
    for(let i = 0;i<dots_block.childNodes.length;i++){          
         dots_block.childNodes[i].style.background = '#FF2B2B'         
        }    
    target.style.background = '#fff'
    create_video_card (target.id,(+count_video_in_page)+(+target.id))
  };


const create_video_card = (start,end) =>{ 
        container.innerHTML = ""
    for(let i = start;i<end;i++){ 
        const video_card = document.createElement('div')       
        video_card.className = "video-card"
try{
        const thumb = document.createElement('img')
        thumb.setAttribute('src', res_data[i].thumb)

        const link = document.createElement('a')
        link.setAttribute('href', res_data[i].link)
        link.setAttribute('target', '_blank')
        link.appendChild(thumb)

        const title = document.createElement('h1')
        title.innerHTML =`<a href=${link} target=_blank>${res_data[i].title}</a>`

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
    }
catch{}               
      }
      document.body.appendChild(container)   
      document.body.appendChild(dots_block)
}
let down = 0;
let up = 0;  
document.onmousedown = (e)=> {    
    if (e.which != 1) {return}        
    down = e.clientX
    }
document.onmouseup = (e)=> {    
    let target_dot = 0;
    let next_dot_i = 0;    
     if (e.which != 1) {return}
     up = e.clientX     
     if(down-up > 200){
        container.style.left = '-100vw'           
        setTimeout(()=>{container.style.opacity = '0' },250)         
        setTimeout(()=>{
            next_dot(target_dot,next_dot_i)
            container.style.left = '100vw'
            container.style.opacity = '1'
        },300)         
        setTimeout(()=>{container.style.left = '0vw'},350)
    }
    if(up-down > 200){
        container.style.left = '100vw' 
    setTimeout(()=>{container.style.opacity = '0' },250)         
        setTimeout(()=>{
            prev_dot(target_dot,next_dot_i)
            container.style.left = '-100vw'
            container.style.opacity = '1'
        },300)         
        setTimeout(()=>{container.style.left = '0vw'},350)
}
    }
    document.addEventListener('touchmove',f);
    document.addEventListener('touchend',end);
    document.addEventListener('touchstart',start);
let arr_toches = []
    function start(ev){
        arr_toches = []
    }
    function f(ev){
        arr_toches.push(ev.touches[0].clientX)
    }

    function end(){
        container.style.left = '100vw'
        let target_dot = 0;
        let next_dot_i = 0;       
      if(arr_toches[0]-arr_toches[arr_toches.length-1] > 200){  
        setTimeout(()=>{next_dot(target_dot,next_dot_i)},500) 
    }
       if(arr_toches[arr_toches.length-1]-arr_toches[0] > 200){
        setTimeout(()=>{prev_dot(target_dot,next_dot_i)},500) 
       }
    }
    
    
       function next_dot(target_dot,next_dot_i){
        for(let i = 0;i<dots_block.childNodes.length;i++){            
            if(dots_block.childNodes[i].style.background === 'rgb(255, 255, 255)'){
             target_dot = dots_block.childNodes[i]
             next_dot_i = i}
             dots_block.childNodes[i].style.background = '#FF2B2B'         
            }    
            try{dots_block.childNodes[next_dot_i+1].style.background = '#FFF'
             const sum = (+target_dot.id)+(+count_video_in_page)   
             const sum2 = +sum+(+count_video_in_page)         
        create_video_card(sum,sum2)}
        catch{
            const last = dots_block.childNodes[0]
            last.style.background = '#FFF'
            try{create_video_card(1,+count_video_in_page+1)}
            catch{}
           }
    }


    function prev_dot(target_dot,next_dot_i){
        for(let i = 0;i<dots_block.childNodes.length;i++){            
            if(dots_block.childNodes[i].style.background === 'rgb(255, 255, 255)'){
             target_dot = dots_block.childNodes[i]
             next_dot_i = i}
             dots_block.childNodes[i].style.background = '#FF2B2B'         
            }    
            try{dots_block.childNodes[next_dot_i-1].style.background = '#FFF'
             const sum = (+target_dot.id)-(+count_video_in_page) 
             create_video_card(sum,target_dot.id)}
             catch{
                 const last = dots_block.childNodes[dots_block.childNodes.length-1]
                 last.style.background = '#FFF'
                 try{create_video_card(last.id,(+last.id)+(+count_video_in_page))}
                 catch{}
                }
                }
