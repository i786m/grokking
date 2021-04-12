function find_avg_of_subarray(k, arr){
    const result = []
    let winSum = 0, winStart = 0

    for (let winEnd = 0 ; winEnd<arr.length ; winEnd++){
        winSum += arr[winEnd] //  addd the next element
        //slid window, we dont need to slide if weve not hit the required window size k
        if (winEnd>=k-1){
            result.push(winSum/k)
            winSum -= arr[winStart]
            winStart++
        }
    }
    return result
}