function frequencyCheck(arr){
    let map={}
    for(let num of arr){
    map[num]=(map[num]||0)+1
    }
    return map
}
console.log(frequencyCheck([3,2,1,5,2,4,1,2,4,8]))