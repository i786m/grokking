class Interval{
    constructor(start,end){
        this.start = start;
        this.end = end
    }


printInterval(){
    process.stdout.write(`[${this.start},${this.end}]`)
    }
}

function merge(intervals){
    if(intervals.length < 2){
        return intervals
    }

    //sort intervals by start
    intervals.sort((a,b)=>a.start - b.start)

    const mergedIntervals = []
    let start = intervals[0].start,
        end = intervals[0].end
    for(let i = 1 ; i< intervals.length ; i++){
        const interval = intervals[i]
        if(interval.start <= end) { // checking for overlap to adjust the end
            end = Math.max(interval.end , end)
        }else{ //non-overlap, add the previous interval and reset
            mergedIntervals.push(new Interval(start,end))
            start = interval.start
            end = interval.end
        }
    }
    // add the last interval
    mergedIntervals.push(new Interval(start,end))
    return mergedIntervals
}

//O(N * logN)|O(N)