const inrease=document.getElementById('increase')
const decrease=document.getElementById('decrease')
const countValue=document.getElementById('count-value')

let count=Number(countValue.textContent)
inrease.addEventListener('click',()=>{
        count++
    countValue.textContent=count
    
})
decrease.addEventListener('click',()=>{
    if(count>0){
        count--
        countValue.textContent=count
    }
})