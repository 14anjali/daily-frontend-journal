const countEl=document.querySelector('p')
const incrementBtn=document.getElementById('increment')
const decrementBtn=document.getElementById('decrement')
const resetBtn=document.getElementById('reset')
let currentCount=0

function increment(value){
    return value+1
}
function decrement(value){
 return value>0?value-1:value  
}
function reset(){
    return 0
}
countEl.textContent=currentCount

incrementBtn.addEventListener('click',()=>{
    currentCount=increment(currentCount)
countEl.textContent=currentCount
})
decrementBtn.addEventListener('click',()=>{
    currentCount=decrement(currentCount)
    countEl.textContent=currentCount
})
resetBtn.addEventListener('click',()=>{
    currentCount=reset()
   countEl.textContent=currentCount
})

