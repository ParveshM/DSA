class Graph {
    constructor() {
        this.graph = {};
    }

    addVertex(data) {
        this.graph[data] = []
    }

    insert(vertex, edge, isBidirectional) {

        if (!this.graph[vertex]) {
            this.addVertex(vertex)
        }

        if (!this.graph[edge]) {
            this.addVertex(edge)
        }

        this.graph[vertex].push(edge)
        if (isBidirectional) {
            this.graph[edge].push(vertex)
        }
    }

    display() {
        for (const key in this.graph) {
            let values = this.graph[key].join(' ')
            console.log(`${key}:  ${values} `);
        }
    }

    dfs(startingNode, visited = {}) {
        if (!this.graph[startingNode]) {
            return 'No vertex founf'
        }

        visited[startingNode] = true;
        console.log('visited node :', startingNode);
        for (const value of this.graph[startingNode]) {
            if (!visited[value]) {
                this.dfs(value, visited)
            }
        }
    }

    
}

const graph = new Graph();
graph.insert(3, 5, true)
graph.insert(3, 4, true)
graph.insert(5, 6, false)
graph.insert(6, 3, false)
// graph.display()
graph.dfs(3)
console.log('Graph is :', graph.graph);
