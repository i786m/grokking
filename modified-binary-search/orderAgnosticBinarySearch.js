function binary_search(arr, key){
    let start = 0 , end = arr.length -1
    let isAscending = arr[start]<arr[end]
    while(start<=end){
        //calculate the middle of the current range
        let mid = Math.floor(start + (end-start) / 2)
        
        if(key ===arr[mid]){
            return mid
        }
        if(isAscending){
            if(key<arr[mid]){
                end = mid - 1 // key maybe in first half
            }else{
                start = mid + 1 // key maybe in second half
            }
        }else{
            if(key>arr[mid]){
                end = mid - 1
            }else{
                start = mid + 1
            }
        }
    }

    return -1 //if key is not found
}

//O(logN)|O(1)