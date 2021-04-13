function longestSubstringWithSameLetters(k,str){
    let winStart = 0 , maxLength = 0 ,maxRepeatLetterCount = 0 , frequencyMap={}

    for (let winEnd=0;winEnd<str.length ; winEnd++){
        let rightChar = str[winEnd]
        frequencyMap[rightChar]? frequencyMap[rightChar]++ : frequencyMap[rightChar] = 1

        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar])


        if(winEnd - winStart + 1 -maxRepeatLetterCount > k ){
            let leftChar = str[winStart]
            frequencyMap[leftChar]--
            winStart++
        }
        maxLength= Math.max(maxLength, winEnd-winStart + 1)
    }
    return maxLength
}