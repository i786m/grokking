const Deque = require('./collections/deque') // collectionsjs.com

function topological_sort(vertices, edges){
    const sortedOrder=[]
    if (vertices<=0) return sortedOrder


    // a. intialise the graph
    const inDegree = Array(vertices).fill(0)//count of incoming edges
    const graph = Array(vertices).fill(0).map(()=>Array()) // adjacency list graph

    //b. build the graph
    edges.forEach(edge => {
        let parent = edge[0], child = edge[1]
        graph[parent].push(child) // put child into the parents list
        inDegree[child++] // increment childs inDegree
    });

    //c. find all sources i.e vertices with 0 inDegrees 
    const sources = new Deque()
    for(let i=0;i<inDegree.length;i++){
        if(inDegree[i]==0) sources.push(i)
    }


    //d. for each source add it to the sortedorder and subtract one from all of its childrens indegrees, if a childs indegree count reaches zero add it to the sources queue
    while(sources.length){
        const vertex = sources.shift()
        sortedOrder.push(vertex)
        graph[vertex].forEach((child)=>{ // get the nodes children to decrement their indegrees
            inDegree[child] -= 1
            if(inDegree[child]==0) sources.push(child)

        })
    }
    //topological sort is not poss if the graph has a cycle
    if (sortedOrder.length !== vertices) return []

    return sortedOrder
}