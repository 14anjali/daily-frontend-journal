const users = [
  { id: 1, name: 'Anjali' },
  { id: 2, name: 'Riya' },
  { id: 1, name: 'Anjali' },
  { id: 3, name: 'Neha' },
  { id: 2, name: 'Riya' }
]
let result=[]
let seen=new Set()

for(let user of users){
    if(!seen.has(user.id)){
        seen.add(user.id)
        result.push(user)
    }
}
console.log(result)