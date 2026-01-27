function largestNum(nums){
let max=nums[0]
let secondMax=0
for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
      secondMax=max
      max=nums[i]
    }else if(nums[i]>secondMax && nums[i] !==max){
secondMax=nums[i]
    }
  
}
  return secondMax
}
console.log(largestNum([3,6,34,2,67]))