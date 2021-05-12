const Deque = require('./collections/deque') //collectionsjs.com

function findSubarray(arr, target){
    let res = [] , 
        prod = 1 ,
        left = 0
    for(let right = 0 ; right < arr.length ; right++){
        prod *= arr[right]
        while(prod >= target && left < arr.length){
            prod /= arr[left]
            left++
        }
        // since the prod of all numbers from l to r is less than the target therefore all subarrays from l to r will have a prod less than target too  ; to avoid duplicates, we will start with the subarray containing only arr[right] then extend it
        const templist = new Deque()
        for(let i = right ; i > left - 1; i--){
            templist.unshift(arr[i])
            res.push(templist.toArray())
        }
    }
    return res
}

//O(N**3)|O(N)