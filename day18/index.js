// function checkPalindrome(str){
//    let result=''
//    for(let i=str.length-1;i>=0;i--){
//     result += str[i]
//    }
//     if(str==result){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(checkPalindrome('papa'))

//count vovels

// function countVovels(str){
//     let vovels="AEIOUaeiou"
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if(vovels.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVovels("Anjali"))

//first non repeating character

//frequency count

// function findFrequency(str){
//     let obj={}

//     for(let ch of str){
//             obj[ch]=(obj[ch] || 0)+1
//     }
//     return obj
// }
// console.log(findFrequency("sdbaobsovibeghw"))

//Replace space with "_"

// function replaceSpace(str){
//     let result=str.split(' ').join("_")
//     return result
// }
// console.log(replaceSpace('hey i am a coder'))

//convert a sentence to title case

// function titleCase(str){
    // let words=str.split(' ')
    // let result=[]
    // for(let i=0;i<words.length;i++){
    //     let word=words[i]
        
    //     result.push(
    //         word[0].toUpperCase()+word.slice(1).toLowerCase()
    //     )
    // }
    // return result.join(" ")

//2nd method     return str
//     .split(' ')
//     .map(word=>word[0].toUpperCase()+word.slice(1).toLowerCase()).join(' ')
// }
// console.log(titleCase("i am learning js"))

//Anagram check

function anagramCheck(str1,str2){
//    if(str1.length !== str2.length) return false

//    const s1=str1.split("").sort().join('')
//    const s2 =str2.split('').sort().join('')

//    return s1===s2

//2nd method

if(str1.length !== str2.length) return false

let count={}
for(let ch of str1){
    count[ch]=(count[ch] ||0)+1

}
for(let ch of str2){
    if(!count[ch]) return false
    count[ch]--
}
return true
}
console.log(anagramCheck('dusty','study'))