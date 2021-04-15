function nonRepeatSubstring(str){
    let winStart = 0 , maxLength = 0 , charIndexMap = {}

    for(let winEnd = 0 ; winEnd<str.length ; winEnd++){
        let rightChar = str[winEnd]
        //if the map already contains rightchar, shrink window so that we only have a single occurence in the map
        if(rightchar in charIndexMap){
            winStart = Math.max(winStart, charIndexMap[rightChar]+1)
        }
        charIndexMap[rightChar]=winEnd

        maxLength = Math.max(maxLength , winEnd-winStart+1)
    }
    return maxLength
}