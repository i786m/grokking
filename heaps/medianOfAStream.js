const Heap =  require('./collections/heap') //collectionsjs.com

class MedianOfAStream{
    constructor(){
        this.maxHeap = new Heap([],null , ((a,b)=>a-b))
        this.minHeap = new Heap([],null , ((a,b)=>b-a))
    }
    insert_num(num){
        if(this.maxHeap.length===0||this.maxHeap.peek()>= num){
            this.maxHeap.push(num)
        }else{
            this.minHeap.push(num)
        }

        //either both the heaps will have equal num of elements or maxheap
        //will have one mpre element than minheap
        if(this.maxHeap.length > this.minHeap.length +1){
            this.minHeap.push(this.maxHeap.pop())
        }else if(this.maxHeap.length<this.minHeap.length){
            this.maxHeap.push(this.minHeap.pop())
        }
    }

    find_median(){
        if(this.maxHeap.length==this.minHeap.length){//for even elements
            return (this.maxHeap.peek() + this.minHeap.peek())/2
        }
        return this.maxHeap.peek()
    }
}
//time O(logN) insert_num |  O(1) find_median | space O(N)