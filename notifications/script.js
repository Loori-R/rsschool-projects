const notice = document.querySelector('aside.notifications')
const close = document.getElementsByClassName('close')
setTimeout(()=>{notice.style.opacity = '1'},5000)
close[0].onclick = ()=>
{
    notice.style.opacity = '0'
}