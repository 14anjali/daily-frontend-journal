import { useState } from "react";
import Product from "./Product";
function Body() {
  const [items, setItems] = useState([
    { id: 1, name: "Milk", price: 100 },
    { id: 2, name: "Protien", price: 10000 },
    { id: 3, name: "Chocolate", price: 199 },
    { id: 4, name: "Powder", price: 120 },
    { id: 5, name: "Eggs", price: 99 },
    { id: 6, name: "potato", price: 40 },
  ]);
  return (
    <>
      <h1>I am Blinkit Body</h1>
      {/* <Counter/> */}
      <div style={{display:"flex", gap:"50px"}}>
        {
            items.map((item)=><Product key={item.id} item={item}></Product>)
        }
      </div>
    </>
  );
}
export default Body;
