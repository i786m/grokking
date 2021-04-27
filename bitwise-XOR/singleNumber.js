function findSingleNumber(arr){
    let num = 0
    for(let i = 0 ; i<arr.length;i++){
        num ^= arr[i]
    }

    return num
}

//O(N)|O(1)