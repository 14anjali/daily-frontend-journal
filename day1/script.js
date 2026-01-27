const list=document.getElementById('list')
const addBtn=document.querySelector('button')

 let count=list.children.length
addBtn.addEventListener('click',()=>{
   
    let li=document.createElement('li')
    li.textContent=`item ${++count}`
    list.appendChild(li)
})