class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function findCycleLength(head){
    let slow = head,
        fast = head

    while(fast!==null && fast.next!==null){
        fast = fast.next.next // hare
        slow = slow.next //tortoise
        if(slow==fast) return calculateCycleLength(slow)
    }
    return 0
}


function calculateCycleLength(slow){
    let current = slow, 
        cycle_length = 0

    while(true){
        current = current.next
        cycle_length++
        if(current===slow) break
    }
    
    return cycle_length
}
//O(N)|O(1)