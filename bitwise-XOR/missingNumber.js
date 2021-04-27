function missingNumber(){
    const n = arr.length + 1
    //x1 represent XOR of all values from 1-n
    //find sum of all numbers from 1-n
    let x1 = 1
    for(let i = 2 ; i<=n ; i++){
        x1 = x1 ^ i
    } 

    //x2  represents XOR of all values in arr
    let x2 = arr[0]
    for(let i=1; i<n-1; i++){
        x2 = x2 ^ arr[i]
    }

    //missing num is the xor of x1&x2
    return x1^x2
}

//O(N)|O(N)