// function fizzBuzz(arr){
//     return arr.map((num)=>{
//         if(num % 3===0 && num%5===0){
//            return "FizzBuzz"
//         }
//         else if(num %5===0){
//            return "Buzz"
//         }else if(num %3===0){
//             return "Fizz"
//         }else{
//             return num
//         }
//     })
// }
// console.log(fizzBuzz([3,2,123,55,3]))

// function factorial(num){
//     let result=1
//    let i=1
//    while(i<=num){
//     result *= i
//     i++
// }    
// return result
// }
// console.log(factorial(78))

function primeNumber(num){
for(let i=1;i<num;i++){
        if(num%i==0){
            return false
        }else{
            return true
        }
    }
}
console.log(primeNumber(5))