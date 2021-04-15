function smallest_subarray_with_given_sum(s,arr){
    let winSum = 0 , minLength =Infinity , winStart= 0

    for(let winEnd = 0 ; winEnd<arr.length ; winEnd++){
        winSum += arr[winEnd]

        while(winSum>= s){
            minLength = Math.min(minLength, winEnd-winStart + 1)
            winSum -= arr[winStart]
            winStart++
        }
    }
 
    return minLength==Infinity ?  0 : minLength
}

//time space O(n)|O(1)