//----------------find max num-----------------------

// function findMax(a,b,c){
//    if(a >=b && a>= c){
//     console.log(`${a} is the max`)
//    }
//    else if(b >= a && b>=c){
//     console.log(`${b} is max`)
//    }
//    else{
//     console.log(`${c} is max`)
//    }
// }

// function findMax(a,b,c){
//     return Math.max(a,b,c)
// }
// console.log(findMax(10,20,5))

//-----------------Check if a Number is Positive, Negative, or Zero----------------------

// function checkPositivity(a){
//     if(a<0){
//         console.log("number is negative")
//     }else{
//         console.log("number is positive")
//     }
// }
// checkPositivity(-9)

//-------------------Calculate Electricity Bill--------------------

// function calculateBill(unit) {
//   let price = 0;
//   let totalBill = 0;
//   if (unit < 0 && unit < 100) {
//     price = 5;
//     totalBill = unit * price;
//   } else if (unit > 101 && unit < 200) {
//     price = 7;
//     totalBill = unit * price;
//   } else if (unit > 201 && unit < 300) {
//     price = 10;
//     totalBill = unit * price;
//   } else {
//     price = 12;
//     totalBill = unit * price;
//   }
//   return totalBill;
// }
// console.log(calculateBill(230));

//---------------Check if a Character is a Vowel or Consonant---------------------

// function VowelCheck(char) {
//   let vowels = "aeiou";
//   char = char.toLowerCase();
//   let isVowel = false;

//   for (let i = 0; i < vowels.length; i++) {
//     if (char === vowels[i]) {
//       isVowel = true;
//       break;
//     }
//   }
//   if (isVowel) {
//     console.log(`${char} is vowels`);
//   } else {
//     console.log(`${char} is not vowel`);
//   }
// }

// VowelCheck("j");

//------------------Check if a Year is a Leap Year------------------------

// function leapYear(year){
//      if((year % 4 === 0 && year %100 !== 0)||year %400===0){
//         console.log("Its a leap year")
//      }else{
//         console.log('Its not a leap year')
//      }
// }
// leapYear(2021)

//-----------Check if a Character is Uppercase, Lowercase, Digit, or Special Character----------------

function charCheck(char) {
  let charCode = char.charCodeAt(0);
  if (charCode >= 0 && charCode <= 9) {
    console.log("its is number");
  } else if (charCode >= 65 && charCode <= 90) {
    console.log("its is Uppercase character");
  } else if (charCode >= 97 && charCode <= 122) {
    console.log("its is Lowercase character");
  } else if (charCode >= 33 && charCode <= 38) {
    console.log("its a special character");
  }
}
charCheck('4');
