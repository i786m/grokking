function makeSquares(arr){
    let n = arr.length,
        squares = Array(n).fill(0),
        highestSquareIdx = n-1,
        left = 0,
        right= n-1

        while(left<=right){
            let leftSquare = arr[left]**2,
                rightSquare = arr[right]**2
            
            if(leftSquare>rightSquare){
                squares[highestSquareIdx] = leftSquare
                left++
            }else{
                squares[highestSquareIdx] = rightSquare
                right--
            }
            highestSquareIdx--
        }
        return squares
}

//O(N)|O(N)