import React, { Children, useState } from "react"
import Child from "./Child"
function Parent(){
    const [name,setName] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        console.log("name submit :", name)
    }
    function handleName(e){
        setName(e.target.value)
    }
return(
   <>
   <Child
   name={name}
   onNameChange={handleName}
   onSubmit={handleSubmit}
   />
        </>
    )
}
export default Parent