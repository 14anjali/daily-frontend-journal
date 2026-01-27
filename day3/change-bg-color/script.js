const btn = document.getElementById('btn')
const html=document.documentElement

btn.addEventListener('click',()=>{
    html.classList.toggle('bg-red')
})