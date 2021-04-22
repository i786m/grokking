const Deque = require('./collections/deque')///collectionsjs.com

class TreeNode{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

function traverse(root){
    const result = new Deque()
    if(root == null) return result

    const queue = new Deque()
    queue.push(root)
    while(queue.length){
        let levelSize = queue.length
        let currentLevel = []
        for(let i = 0 ; i< levelSize ; i++){
            let currentNode = queue.shift()
            currentLevel.push(currentNode.val)
            if(currentNode.left !== null) queue.push(currentNode.left)
            if(currentNode.right !== null) queue.push(currentNode.right)
        }
        result.unshift(currentLevel)
    }
    return result
}