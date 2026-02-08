//Print numbers from 1 to N

function printNumber(n){
    for(let i=1;i<=n;i++){
        console.log(i)
    }
}
printNumber(5)

//-------------------------------------//

//print Numbers from  N to 1 without chanding the looop condition above

function printNumber(n){
    for(let i=n;i>=1;i--){
        console.log(i)
    }
}
printNumber(5)

//-----------------------------------------------//

//Print All even numbers from 1 to N

function evenNum(n){
    for(let i=1;i<=n;i++){
        if(i%2===0){
            console.log(i)
        }
    }
}
evenNum(10)

//---------------------------------------------//

//Sum of first N Natural Numbers

function   SumOfNum(n){
    let sum=0
    for(let i=1;i<=n;i++){
  sum +=i
    }
    return sum
}

console.log(SumOfNum(5))

//----------------------------------------------//

//Factorial of N

function factorial(n){
    let product=1
    for(let i=1;i<=n;i++){
 product *= i
    }
    return product
}
console.log(factorial(5))

//---------------------------------------------//

//SUm of All Even Numbers up to N

function sumOfEven(n){
    let sum=0
    for(let i=0;i<=n;i++){
        if(i%2===0){
            sum +=i
        }
    }
    return sum
}
console.log(sumOfEven(10))

//---------------------------------------------//

//Print Squares of Nnumbers from 1 to N

function squareOfnum(n){
    for(let i=1;i<=n;i++){
        console.log(i*i)
    }
}
squareOfnum(5)

//----------------------------------------//

//Print all numbers divisible by 3 and 5 upto N

function divisibleBy3_5(n){
for(let i=1;i<=n;i++){
    if(i % 3===0 && i%5===0){
        console.log(i)
    }
}
}
divisibleBy3_5(30)

//-------------------------------------------------//

function sumOfOdd(n){
    for(let i=1;i<=n;i++){
        if(i%2!==0){
        console.log(i)
    }}
}
sumOfOdd(10)

//-------------------------------------------------//

//Print the cubes of numbers from 1 to N

function cubesOfNum(n){
    for(let i=1;i<=n;i++){
        // console.log(i*i*i)
        console.log(Math.pow(i,3))             //builtIn Method
    }
}
cubesOfNum(5)

//---------------------------------------------------//

//Print only the Numbers that are both even and perfect squares

function evenperfectSquaers(n){
    for(let i=1;i*i<=n;i++){
      if(i%2==0){
        console.log(i*i)
      }
    }
}
perfectSquaers(20)