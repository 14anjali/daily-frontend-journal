import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { createContext, useState } from 'react'

// export const CounterContext=createContext()
export const ProductContext=createContext()
function App() {
// const [count,setCount]=useState(0)
const [cartItem,setCartItem]=useState(0)

  return (
    <>
      {/* <CounterContext value={{count,setCount}}>
       */}
<ProductContext value={{cartItem,setCartItem}}>
        <Header />
      <Body/>
      <Footer/>
      </ProductContext>
      {/* </CounterContext> */}
    </>
  )
}

export default App
