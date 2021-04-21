class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
    printList(){
        let temp = this
        while(temp !== null){
            process.stdout.write(`${temp.value}`)
            temp = temp.next
        }
        console.log()
    }
}

function reverse(head){
    let current = head,
        previous = null

    while(current !== null){
        next = current.next // temp store for next node
        current.next = previous // reverse current node
        previous = current // before we move to next node, point to previous node
        current = next // move on to next node
    }
    return previous
}

//O(N)|O(1)