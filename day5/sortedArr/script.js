function sortedArr(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}
console.log(sortedArr([1,2,3,5,2]))