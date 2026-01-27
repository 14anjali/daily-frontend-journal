import { useState } from 'react'
import './App.css'
import LoggedOut from './compoent/LoggedOut'
import Login from './compoent/Login'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
return (
    <>
    {isLoggedIn ?(
        <Login setIsLoggedIn={setIsLoggedIn} />
      ): (
        <LoggedOut setIsLoggedIn={setIsLoggedIn} />
      )}
     </> 
  )

}
  


export default App
