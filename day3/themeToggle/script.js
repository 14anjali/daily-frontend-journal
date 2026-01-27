const toggleBtn=document.querySelector('button')
const html=document.documentElement

toggleBtn.addEventListener('click',()=>{
    html.classList.toggle('dark')
    toggleBtn.textContent=toggleBtn.textContent=='Dark'?'light':'Dark'
})
