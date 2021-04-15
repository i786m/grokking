function removeElement(arr,key){
    let nextElement = 0 
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] !== key ){
            arr[nextElement] = arr[i]
            nextElement++
        }
    }
    return nextElement
}

//O(N)|O(1) time/space