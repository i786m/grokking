const Deque = require('./collections/deque')//collectionsjs.com

class TreeNode{
    constructor(val ,left=null , right = null){
        this.val = val
        this.right = right
        this.left = left
    }
}

function hasPath(root, sum){
    if(root==null) return false

    if(root.val ===  sum && root.left === null && root.right === null) return true

    return hasPath(root.left, sum-root.val)||hasPath(root.right, sum-root.val)
} 

//O(N)|O(N)