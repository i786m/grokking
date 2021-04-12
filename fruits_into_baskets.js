function fruitsIntoBaskets(arr){
let winStart=0, maxLength=0, fruitFrequency={}

for(let winEnd = 0 ; winEnd<arr.length; winEnd++){
    let rightChar = [winEnd]
    fruitFrequency[rightChar] ? fruitFrequency[rightChar]++ : fruitFrequency[rightChar] = 1

    while(Object.keys(fruitFrequency).length>k){
        let leftChar = str[winStart]
        fruitFrequency[leftChar]--
        if(charFrequency[leftChar]==0) delete fruitFrequency[leftChar]   
    }
    winStart++
}
maxLength = Math.max(maxLength, winEnd-winStart+1)

return maxLength
}