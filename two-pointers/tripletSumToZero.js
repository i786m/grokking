function search_triplets(arr){
    arr.sort((a,b)=>a-b)
    const triplets = []
    for(let i = 0; i<arr.length ; i++){
        if(i > 0 && arr[i]=== arr[i-1]){//skip same elements to avoid duplicates
            continue
        }
        search_pair(arr,-arr[i], i + 1, triplets)
    }
    return triplets
}

function search_pair(arr , target_sum, left , triplets){
    let right = arr.length - 1
    while(left < right){
        let current_sum = arr[left] + arr[right]
        if(current_sum === target_sum){ /// found triplet
            triplets.push([-target_sum, arr[left], arr[right]])
            left++
            right--
            while(left<right && arr[left]===arr[left-1]){
                left++ //skip to avoid duplicates
            }
            while(left<right && arr[right]===arr[right+1]){
                right-- //skip to avoid duplicates
            }
        }else if(target_sum>current_sum){
            left++ // we need a pair with a bigger sum
        }else{
            right-- // we need a pair with a smaller sum
        }
    }
}
//O(N**2)|O(N)