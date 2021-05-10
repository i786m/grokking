function tripletSumCloseToTarget(arr, targetSum){
    arr.sort((a,b)=>a - b)
    let smallestDiff = Infinity
    for(let i = 0; i<arr.length-2;i++){
        let left = i + 1, 
            right = arr.length - 1
        while(left<right){
            const targetDiff = targetSum - arr[i] - arr[left] - arr[right]
            if(targetDiff===0){//found triplet with exact sum
                return targetSum - targetDiff // return sum of all nums
            }
            if(Math.abs(targetDiff) < Math.abs(smallestDiff)){
                smallestDiff = targetDiff // save the closest difference
            }
            // the second part of the following if is to handle the smallest sum if we have more than on solution
            if(Math.abs(targetDiff) < Math.abs(smallestDiff) || Math.abs(targetDiff)===Math.abs(smallestDiff) && targetDiff > smallestDiff){
                smallestDiff = targetDiff // save the closest and biggest diff
            }

            if (targetDiff > 0){
                left += 1 // need a triplet with a bigger sum
            }else{
                right -= 1 // need a sum with a smaller sum
            }
        }
    }
    return targetSum - smallestDiff
}