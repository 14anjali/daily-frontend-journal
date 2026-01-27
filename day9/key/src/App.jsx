import { useMemo, useState } from 'react'
import Sum from './Sum'

import './App.css'

function App() {
    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(100000)

    // function calculatePrime(){
    //     let total=0

    //     if(number>1) total++

    //     for(let i=3;i<=number;i++){
    //         total++
    //         for(let j=2;j<i;j++){
    //             if(i%j==0){
    //                 total--
    //                 break
    //             }
    //         }
    //     }
    //     return total
    // }

    const prime=useMemo(()=>{
        let total=0

        if(number>1) total++

        for(let i=3;i<=number;i++){
            total++
            for(let j=2;j<i;j++){
                if(i%j==0){
                    total--
                    break
                }
            }
        }
        return total
    },[number])
    console.log("app render")
  return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increament</button>
    <h2>Prime Number: {prime}</h2>
    <button onClick={()=>setNumber(number+10000)}>Increament number</button>
    <Sum number={number}></Sum>
    </>
  )
}

export default App
