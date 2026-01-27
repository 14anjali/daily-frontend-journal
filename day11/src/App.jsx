
import './App.css'
import useToggle from './UseToggle'

function App() {
    const [value,toggleValue]=useToggle(true)
    console.log(value)
 return(
    <>
    <button onClick={toggleValue}>Toggle Heading</button>
    <button onClick={()=>toggleValue(false)}>Hide Heading</button>
    <button onClick={()=>toggleValue(true)}>Show Heading</button>
    {
        value ? <h1>Custom Hooks in React js</h1> : null
    }
    
    
    </>
 )
    
  
}

export default App
