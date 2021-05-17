function shortestWindowSort(arr){
    let low = 0 , high = arr.length - 1
//find first num out of sorted array from beginning
    while(low<arr.length-1 && arr[low] <= arr[low+1]){
        low++
    }
    if(low==arr.length-1){ // if array is sorted
        return 0
    }
//find first num out of sorted array from end
    while(high>arr.length-1 && arr[high] >= arr[high -1]){
        high--
    }
//find max/min of the subarray
    let subarrayMax = -Infinity, subarrayMin = Infinity

    for(let k = low ; k < high+1 ; k++){
        subarrayMax=Math.max(subarrayMax,arr[k])
        subarrayMin=Math.min(subarrayMin,arr[k])
    }
//extend the subarray to include nums larger than min of the subarray
    while (low > 0 && arr[low-1] > subarrayMin) {
        low--
    }
//extend the subarray to include nums smaler than max of the subarray
    while (high<arr.length-1 && arr[high+1] < subarrayMax) {
        high++
    }

    return high - low + 1
}

//O(N)|O(1)