import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [time,setTime]=useState(0)
 const intervalRef=useRef(null)

 function handleStart(){
    if(intervalRef.current) return
    intervalRef.current= setInterval(()=>{
        setTime(time=>time+1)
     },1000)
 }
function handleStop(){
clearInterval(intervalRef.current)
}
function handleReset(){
    clearInterval(intervalRef.current)
    setTime(0)
}
  return (
    <>
      <h1>{time}</h1>
      <button onClick={handleStart}> Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
