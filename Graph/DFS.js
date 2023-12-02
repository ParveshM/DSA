class Graph {
    constructor() {
        this.vertics = {};
    }

    addVertex(vertex) {
        if (!this.vertics[vertex]) {
            this.vertics[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        // if there is no vertex or edges
        if (!this.vertics[vertex1]) {
            this.addVertex(vertex1)
        } else if (!this.vertics[vertex2]) {
            this.addVertex(vertex2)
        }
        // add edges to the vertexes
        this.vertics[vertex1].push(vertex2)
        this.vertics[vertex2].push(vertex1)
    }

    depthFirstSearch(startingNode, visited = {}, arr = []) {

        if (!this.vertics[startingNode]) {
            return "Vertex not found";
        }

        visited[startingNode] = true;
        arr.push(startingNode)


        for (let adjacentNode of this.vertics[startingNode]) {
            if (!visited[adjacentNode]) {
                this.depthFirstSearch(adjacentNode, visited, arr)
            }
        }
        return arr
    }
}


const graph = new Graph();
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(2, 3)

console.log('dd', graph.depthFirstSearch(1));

console.log(graph.vertics);