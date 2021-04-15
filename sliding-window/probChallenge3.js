function findSmallestSubstirng(str, pattern){
    let winStart = 0 ,matched= 0 ,subStrStart = 0, minLength =str.length+1, charFrequency={}

    for(let i =0 ; i<pattern.length ; i++){
        charFrequency[pattern[i]] ? charFrequency[pattern[i]]++ : charFrequency[pattern[i]] = 1 
    }

    for(let winEnd = 0 ; winEnd<str.length ; winEnd++){
        let rightChar = str[winEnd]
        if(rightChar in charFrequency){
            charFrequency[rightChar]--
            if(charFrequency[rightChar] >= 0){
                matched++
            }
        }

        while(matched === pattern.length){
            if(minLength>winEnd-winStart+1){
                minLength = winEnd-winStart+1
                subStrStart=winStart
            }

            let leftChar = str[winStart]
            winStart++
            if(leftChar in charFrequency){
                //note that we could have redundant matching chars, therefore we decrement the matched count only when a useful occurence of a matched char is going out of the window
                if(charFrequency[leftChar]==0){
                    matched--
                }
                charFrequency[leftChar] ++
            }
        }
    }
    if(minLength.length > str.length) return ''
    return str.substring(subStrStart, subStrStart + minLength)
}