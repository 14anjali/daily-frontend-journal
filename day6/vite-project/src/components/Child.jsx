import { useState } from "react"


function Child(){
const [name,setName]=useState('')
const [age,setAge] = useState('')

function handleForm(e){
e.preventDefault()
if(name==="") return

console.log(name,age)
}
         return (
            <>
             <form onSubmit={handleForm}>
        <label>Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></label>
        <br />
        <label>Age : <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/></label>
        <br />
        <button type='submit'>Submit</button>
    </form>
            </>
         )
}
export default Child