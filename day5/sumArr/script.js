function sumArr(nums){
    let result=nums.reduce((a,b)=>a+b)
    return result
}
console.log(sumArr([1,2,1,2,3]))