function findStringAnagrams(str, pattern ){
    let winStart = 0 , matched = 0 , patternMap = {}

    for(let i=0 ; i < pattern.length ; i++){
        patternMap[pattern[i]] ? patternMap[pattern[i]]++ : patternMap[pattern[i]]=1
    }

    let resultIndices = []
    // our goal is to match all the chars from patternmap with current window 

    for(let winEnd = 0 ; winEnd<str.length ; winEnd++){
        let rightChar = str[winEnd]
        if(rightChar in patternMap){
            patternMap[rightChar]--
            if(patternMap[rightChar] === 0){
                matched++}
        }
    }

    if(matched===Object.keys(patternMap).length){ // check if weve found an anagram
        resultIndices.push(winStart)
    }

    if (winEnd>=pattern.length-1){
        let leftchar = str[winStart]
        winStart++
        if(leftchar in patternMap){
            if(patternMap[leftchar]===0){matched--}
            patternMap[leftchar]++
        }
    }

    return resultIndices
}