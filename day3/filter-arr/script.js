const users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 19 }
];
const result=users.filter(user=>user.age>18)
console.log(result)