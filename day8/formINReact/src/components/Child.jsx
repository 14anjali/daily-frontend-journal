function Child({onSubmit,name,onNameChange}){
 return(
    <>
   <form onSubmit={onSubmit}>
    <input type="text"
    value={name}
    onChange={onNameChange}
    placeholder="Enter name"
    />
    <button type="submit">Submit</button>
   </form>
   
    </>
 )
}
export default Child