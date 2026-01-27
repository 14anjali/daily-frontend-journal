
function LoggedOut({setIsLoggedIn}){
    return(
        <button onClick={()=>setIsLoggedIn(true)}>Logged In</button>
    )
}

export default LoggedOut