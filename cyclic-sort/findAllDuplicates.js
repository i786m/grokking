function findAllDuplicates(){
    let i = 0
    while(i < nums.length){
        let j = nums[i] - 1
        if(nums[i]!== nums[j]){
            [nums[i],nums[j]] = [nums[j],nums[i]]
        }else{
            i++
        }
    }
    let duplicateNumbers = []

    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]!== i+1) {
            duplicateNumbers.push(i+1)
        }
    }
    return duplicateNumbers
}
//O(N)|O(1)