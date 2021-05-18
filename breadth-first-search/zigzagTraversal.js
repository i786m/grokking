//Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

const Deque = require('./collections/deque') // collectionsjs.com

class TreeNode{
    constructor(val){
        this.val= val
        this.left= null
        this.right = null
    }
}

function traverse(root){
    let result = []
    if(root===null){
        return result
    }

    const q = new Deque()
    q.push(root)
    let leftToRight = true
    while(q.length){
        let levelSize = q.length,
            currentLevel = new Deque()
        for(let i = 0 ; i<levelSize ; i++){
            let currentNode= q.shift()

            //add node to current lvl based on traverse direction
            leftToRight? currentLevel.push(currentNode.val) 
                        :currentLevel.unshift(currentNode.val)
            
            //insert children of current node to the q
            if(currentNode.left !== null){
                q.push(currentNode.left)
            }
            if(currentNode.right !== null){
                q.push(currentNode.right)
            }
        }
        result.push(currentLevel.toArray())
        // reverse the traversal direction
        leftToRight = !leftToRight
    }
    return result
}