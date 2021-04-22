const Deque = require('./collections/deque') // collectionsjs.com

class TreeNode{
    constructor (val){
        this.val = val
        this.left = null
        this.right = null
    }
}

function traverse(root){
    result = []
    if(root === null){
        return result
    }

    const queue = new Deque()
    queue.push(root)
    while(queue.length > 0){
        const levelSize = queue.length
        let currentLevel = []
        for(let i = 0;i<levelSize ; i++){
            let currentNode = queue.shift()
            //add node to current level
            currentLevel.push(currentNode.val)
            //insert the children of current node in the queue
            if(currentNode.left !== null){
                queue.push(currentNode.left)
            }
            if(currentNode.right !== null){
                queue.push(currentNode.rightt)
            }
        }
        result.push(currentLevel)
    }
    return result
}

//O(N)|O(N)