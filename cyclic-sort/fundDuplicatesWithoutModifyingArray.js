function findDuplicates(arr){
    let slow = arr[0],
        fast = arr[arr[0]]
    while(slow != fast){
        slow = arr[slow]
        fast = arr[arr[fast]]
    }

// find the cycle length
let current = arr[arr[slow]] , 
    cycleLength = 1 
    while(current !== arr[slow]){
        current = arr[current]
        cycleLength++
    }
    return find_start(arr,cycleLength)
}

function find_start(arr,cycleLength){
    let pointer1 = arr[0], 
        pointer2 = arr[0]
// move pointer2 ahead cyclelength steps
while(cycleLength > 0){
    ponter2 = arr[pointer2]
    cycleLength--
}
//increment both pointers until the meet at the start of the cycle
while(pointer1 !== pointer2){
    pointer1 = arr[pointer1]
    pointer2 = arr[pointer2]
}
return pointer1
}
//O(N)|O(1)