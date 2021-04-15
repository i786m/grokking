function longest_substring_with_k_chars(k,str){
    let winStart = 0, maxLength = 0 , charFrequency={}


// in the following loo[ well try to extend the range
for(let winEnd = 0 ; winEnd<arr.length; winEnd++){
    let rightChar = str[winEnd]
    charFrequency[rightChar] ? charFrequency[rightChar]++ : charFrequency[rightChar] = 1

    while(Object.keys(charFrequency).length>k){
        let leftChar = str[winStart]
        charFrequency[leftChar]--
        if(charFrequency[leftChar]==0) delete charFrequency[leftChar]   
    }
    winStart++
}
maxLength = Math.max(maxLength, winEnd-winStart+1)

return maxLength
}