import { useState } from 'react'
import './App.css'

    const initialValue=0
function App() {

  const [count, setCount] = useState(initialValue)

  function increament(){
    setCount(prev=>prev+1)
  }
 function decreament(){
setCount(prev=>(prev>0?prev-1:prev)) 
}
 function reset(){
    setCount(initialValue)
 }
  return (
    <>
     <p>{count}</p>
     <button onClick={increament}>Increament</button>
     <button onClick={decreament}>Decrement</button>
     <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
