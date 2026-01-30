import { useEffect, useState } from "react"

function Counter(){
const [count,setCount]=useState(()=>{
    const savedCount =localStorage.getItem("count")
    return savedCount !=null ? Number(savedCount):0
})

useEffect(()=>{
    localStorage.setItem("count",count)
},[count])

const increment=()=>{setCount(prev=>prev+1)}
const decrement=()=>{if(count>0){setCount(prev=>prev-1)}}
const reset=()=>setCount(0)
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count==0}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default Counter