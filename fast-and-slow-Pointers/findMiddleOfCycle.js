class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function findMiddleOfLinkedList(head){
    let slow = head, fast = head

    while(fast!==null && fast.next!==null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}