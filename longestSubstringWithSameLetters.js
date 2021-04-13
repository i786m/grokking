function longestSubstringWithSameLetters(k,str){
    let winStart = 0 , maxLength = 0 ,maxRepeatLetterCount = 0 , frequencyMap={}

    for (let winEnd=0;winEnd<str.length ; winEnd++){
        let rightChar = str[winEnd]
        frequencyMap[rightChar]? frequencyMap[rightChar]++ : frequencyMap[rightChar] = 1

        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar])
        /*current window size from winstart to winend, overall we have a letter which is repeating max lettercount times, this means we can have a win which has one letter repeating maxlettercount times and the remaining letters we should replace. if the remaining letters are more than k it is time to shrink the window as we are not to replace more than k letters
        */ 

        if(winEnd - winStart + 1 -maxRepeatLetterCount > k ){
            let leftChar = str[winStart]
            frequencyMap[leftChar]--
            winStart++
        }
        maxLength= Math.max(maxLength, winEnd-winStart + 1)
    }
    return maxLength
}