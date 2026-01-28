import { useMemo } from "react";
import { useState } from "react";
const items = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
function Search(){
    const [query ,setQuery]=useState("")

     const  filterItems= useMemo(()=>{
      return  items.filter(item=>
            item.toLowerCase().includes(query.toLowerCase())
        )
    },[query])
        return(
<div>
    <input type="text"
    placeholder="Search..."
    value={query}
    onChange={(e)=>setQuery(e.target.value)}
    
    />
    <ul>
        {filterItems.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
</div>
    )
    }
    

export default Search