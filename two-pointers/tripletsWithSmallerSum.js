function tripletWitSmallerSum(arr,target){
    arr.sort((a,b)=> a - b)
    let count = 0
    for(let i = 0 ; i< arr/length -2; i++){
        count += searchPair(arr, target - arr[i], i)
    }
    return count
}


function searchPair(arr, targetSum , first){
    let count = 0,
        left = first + 1 , 
        right = arr.length - 1
    while(left < right){
        if(arr[left] + arr[right] < targetSum){ // found the triplet
            //since arr[right]>=arr[left], therefore, we can replace arr[right] by any num between left and right to get a sum less than target sum
            count += right -left
            left++
        }else{
            right-- // we need a pair with a smaller sum
        }
    }
    return count
}