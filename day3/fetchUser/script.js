const listItem=document.getElementById('list-item')

async function getUsers() {
    listItem.textContent=''
    try{
        let response=await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
     throw new Error('Fetch Failed')
        }
        let users= await response.json()
        const fragment = document.createDocumentFragment();
            users.forEach(user => {
                let li=document.createElement('li')
                li.textContent=user.name
                
                listItem.append(li)
            });
        
    }catch(error){
        console.log('Error',error)
    }
}
getUsers()