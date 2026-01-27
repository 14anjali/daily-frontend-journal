import React from "react"

const Sum = React.memo(({number})=>{

        function calculate(){
            let sum=0
            for(let i=1;i<=number;i++){
                sum+=i
            }
            return sum
        }

    
        console.log("sum is  render")
    const total=calculate()
return (
    <>
<h1>This is sum:</h1>
<h2>{total}</h2>
    </>
)

})
export default Sum