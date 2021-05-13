function searchQuadruplet(arr, target){
    arr.sort((a,b)=>a-b)
    const quads= []
    for(let i = 0 ; i< arr.length -3 ;i++){
        //skip same element to avoid duplicates
        if(i>0 && arr[i]===arr[i-1]){
            continue
        }
        for(let j=i+1 ; j<arr.length -2 ; j++){
            //skip to avoid duplicates
            if(j>i+1 && arr[j]===arr[j-1]){
                continue
            }
            searchPairs(arr,target,i,j,quads)
        }
    }
    return quads
}

function searchPairs(arr,targetSum,first,second,quads){
    let left = second+1,
        right = arr.length - 1
    while(left<right){
        let sum = arr[first]+arr[second]+arr[left]+arr[right]
        if(sum===targetSum){//found the quad
        quads.push([arr[first],arr[second],arr[left],arr[right]])
        left++
        right--
        while(left<right && arr[left]==arr[left-1]){//skip el to avoid duplicates
            left++
        }
        while(left<right && arr[right]==arr[right+1]){//skip el to avoid duplicates
            right--
        }
        }else if(sum<targetSum){
            left++ //need a bigger sum
        }else{
            right-- // need a smaller sum
        }
    }
}

// O(N**3)|O(N)