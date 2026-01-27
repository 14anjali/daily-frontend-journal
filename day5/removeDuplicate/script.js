function removeDuplicate(arr){
let uniqueNum=new Map()
let result=[]
for(let i=0;i<arr.length;i++){
    if(!uniqueNum.has(arr[i])){
        uniqueNum.set(arr[i],true)
        result.push(arr[i])
    }
}
return result
}
console.log(removeDuplicate([12,4534,1,2,1,2,34,5]))