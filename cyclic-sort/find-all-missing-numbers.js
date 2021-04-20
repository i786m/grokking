function findAllMissingNumbers(nums){
    let i = 0
    while(i < nums.length){
        let j = nums[i] - 1
        if(nums[i]!==nums[j]){
            [nums[i],nums[j]] = [nums[j],nums[i]]
        }else{
            i++
        }
    }
    let missingNumbers = []

    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]!==i +1) {
            missingNumbers.push(i+1)
        }
    }
    return missingNumbers
}
//O(N)|O(1)
