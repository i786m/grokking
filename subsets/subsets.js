function find_subsets(nums){
    let subsets = []
    ///start by adding empty subset
    subsets.push([])
    for(let i = 0 ; nums.length ; i++){
        let current_number = nums[i]
        //we will take all existing subsets and insert current num to create new subsets
        const n = subsets.length
        for(let j = 0 ; j<n ; j++){
            // create a new subset from the existing subset and insert the current element to it 
            const set1 =  subsets[j].slice(0) // clone the permutation
            set1.push(current_number)
            subsets.push(set1)
        }
    }
    return subsets
}

//O(N*2**N)|O(N*2**N) 