const Deque = require('./collections/deque')//collectionsjs.com

class TreeNode{
    constructor(val ,left=null , right = null){
        this.val = val
        this.right = right
        this.left = left
    }
}

function findPaths(root, sum){
    let allPaths = []
    findPathsRecursive(root, sum, new Deque(), allPaths)
    return allPaths
}

function findPathsRecursive(currentNode, sum, currentPath, allPaths){
    if(currentNode===null) {
        return
    }

//add current node to the path
    currentPath.push(currentNode.val)

//if the current node is a leaf and its value is equal to the sum, save the current path
    if(currentNode.val===sum && currentNode.left===null && currentNode.right===null){
    allPaths.push(currentPath.toArray())
    }else{
    //traverse the left tree
    findPathsRecursive(currentNode.left, sum - currentNode.val, currentPath, allPaths)
    //traverse the right tree
    findPathsRecursive(currentNode.right, sum - currentNode.val, currentPath, allPaths)
    }
//remove the current node from the path to backtrack,
//we need to remove the current node while we are going up the recursive call stack
    currentPath.pop()
}
//time|space
//O(N**2)|O(N)