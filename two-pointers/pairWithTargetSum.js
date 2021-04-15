function pairWithTargetSum(arr, targetSum){
    let left = 0 , right = arr.length-1

    while(left< right) {
        let currentSum = arr[left] + arr[right]
        if(currentSum === targetSum) return  [left,right]

        targetSum > currentSum ? left++ : right--
    }

    return [-1,-1]
}


//O(N)||O(1)