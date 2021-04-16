class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function hasCycle(head){
    let slow = head,
        fast = head

    while(fast!==null && fast.next!==null){
        fast = fast.next.next // hare
        slow = slow.next //tortoise
        if(slow==fast) return true
    }
    return false
}

//O(N)|O(1)