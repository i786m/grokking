class TreeNode{
    constructor(val ,left=null , right = null){
        this.val = val
        this.right = right
        this.left = left
    }
}

function findSumOfPathNumbers(root){
    return findRootToLeafPathNumbers(root,0)
}

function findRootToLeafPathNumbers(currentNode,pathSum){
    if (currentNode===null){
        return 0
    }

    //calc the path number of the current node
    pathSum = 10 * pathSum + currentNode.val

    //if the current node is a leaf, return the current path sum
    if(currentNode.left===null && currentNode.right===null){
        return pathSum
    }

    //travers the left and the right sub tree
    return findRootToLeafPathNumbers(currentNode.left, pathSum) +
           findRootToLeafPathNumbers(currentNode.right, pathSum)
}

//O(N)|O(N)