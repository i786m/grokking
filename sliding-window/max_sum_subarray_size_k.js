function max_sum_subarray_size_k(){
        let  maxSum = winSum = 0, winStart = 0
    
        for (let winEnd = 0 ; winEnd<arr.length ; winEnd++){
            winSum += arr[winEnd] //  addd the next element
            //slid window, we dont need to slide if weve not hit the required window size k
            if (winEnd>=k-1){
                maxSum = Math.max(maxSum,winSum)
                winSum -= arr[winStart]
                winStart++
            }
        }
        return maxSum
    }


    // time = O(n)
    // space = O(1)