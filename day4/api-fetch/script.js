let listItem=document.getElementById('list-item')
let status=document.getElementById('status')
let searchInput=document.getElementById('search-user')

async function apiUsers() {
    status.textContent='Loading...'
    listItem.innerHTML=''
    try{
        let response=await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
            throw new Error('fetch failed')
        }
        let users=await response.json()
         const fragment = document.createDocumentFragment()
        users.forEach(user => {
            let li = document.createElement('li')
            li.textContent=`${user.name} ${user.id}`
            li.dataset.name=user.name.toLowerCase()
            fragment.appendChild(li)
        });
        listItem.appendChild(fragment)
        status.textContent="User data Loaded"
    }catch(error){
       listItem.innerHTML="<li>failed to load users</li>"
       status.textContent="Fail data Load"
    }

    searchInput.addEventListener('input',()=>{
        let value=searchInput.value.toLowerCase()
        let items=listItem.children
      for(let li of items){
       li.classList.toggle('hidden', !li.dataset.name.includes(value))
      }
    })
}

apiUsers()