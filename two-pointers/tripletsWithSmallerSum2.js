function tripletWithSmallerSum(arr,target){
    arr.sort((a,b)=> a - b)
    let triplets = []
    for(let i = 0 ; i< arr/length -2; i++){
        (arr, target - arr[i], i,triplets)
    }
    return triplets
}


function searchPair(arr, targetSum , first, triplets){
    let left = first + 1 , 
        right = arr.length - 1
    while(left < right){
        if(arr[left] + arr[right] < targetSum){ // found the triplet
            //since arr[right]>=arr[left], therefore, we can replace arr[right] by any num between left and right to get a sum less than target sum
            for(let i = right ; i>left ; i--){
                triplets.push([arr[first], arr[left], arr[i]])
            }
            left++
        }else{
            right-- // we need a pair with a smaller sum
        }
    }
    return count
}

//O(N**2)|O(N)