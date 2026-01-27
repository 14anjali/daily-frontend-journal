function Login({setIsLoggedIn}){
    return(
        <button onClick={()=>setIsLoggedIn(false)}>Login</button>
    )
}
export default Login