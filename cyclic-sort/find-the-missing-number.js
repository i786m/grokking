function findTheMissingNember(nums){
    let i = 0
    let n = nums.length
    while(i<n){
        let j = nums[i]
        if(nums[i]<n && nums[i]!==nums[j]){
            [nums[i],nums[j]] = [nums[j],nums[i]]
        }else{
            i++
        }
    }

    for(let i = 0 ; i<n ; i++){
        if(nums[i]!==i) return i
    }
    return n
}
//O(N)|O(1)