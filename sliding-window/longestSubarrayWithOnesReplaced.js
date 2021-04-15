function longestSubarrayWithOnesReplaced(k,arr){
    let winStart = 0 , maxLength = 0 , maxOnesCount=0

    for( let winEnd=0 ; winEnd<arr.length ; winEnd++){
        if(arr[winEnd]==1) maxOnesCount++
 
        if(winEnd-winStart+1 - maxOnesCount > k ){
            if(arr[winStart]===1) maxOnesCount--
            winStart++
        }
     maxLength = Math.max(maxLength, winEnd - winStart+1)
    }
return maxLength
}