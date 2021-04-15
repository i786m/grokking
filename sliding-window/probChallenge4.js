function findWordConcat(str, words){
    if(words.length==0||words[0].length ===0) return []

    let wordFrequency = {}

    words.forEach(e=>wordFrequency[e] ? wordFrequency[e]++ : wordFrequency[e]=1)

    let resultIndices = [] , 
        wordsCount = words.length
        wordLength = words[0].length

    for(let i=0; i < (str.length-wordsCount*wordLength)+1 ; i++){
        let wordsSeen = {}
        for(let j = 0 ; j<words.count ; j++){
            let nextWordIndex = i+j*wordLength
            //get next word from string
            let word = str.substring(nextWordIndex, nextWordIndex+wordLength)
            
            if(!word in wordFrequency) break // break if we dont need this word
            
            //add word to wordSeen map
            wordsSeen[word] ? wordsSeen[word] ++ : wordsSeen[word]=1

            // no need to process further if the word has a higher frequency than required
            if(wordsSeen[word] > (wordFrequency[word]||0)) break

            if(j+1==wordsCount) resultIndices.push(i) // store index if all words have been found
        }
    }
    return resultIndices
}

// findWordConcat('catfoxcat',['cat','fox'])

// O(N*M*Len) (n =chars, m= words , l = length of words)
// || 
// O(N+M) (2 hashmaps)