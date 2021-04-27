class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}


function findCycleStart(head){
    let cycleLength = 0
    // find the linked list cycle
    let slow = head , fast = head
    while(fast!==null && fast.next==null){
        fast = fast.next.next
        slow = slow.next
        if(slow==fast){
            cycleLength = calculateCycleLength(slow)
            break
        }
    }
    return findStart(head, cycleLength)
}

function calculateCycleLength(slow){
    let current = slow , cycleLength = 0
    while(true){
        current = current.next
        cycleLength++
        if(current==slow){
            break
        }
    }
    return cycleLength
}

function findStart(head, cycleLength){
    let pointer1 = head, pointer2 = head

    while(cycleLength){
        pointer2 = pointer2.next
        cycleLength-- 
    }
    while(pointer1!==pointer2){
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
    return pointer1
}

//O(N)|O(1)