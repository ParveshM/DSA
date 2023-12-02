class BFS {
    constructor() {
        this.vertices = {}
    }


    addVertex(vertex) {
        this.vertices[vertex] = []
    }

    insert(vertex, edge, isBidirectional) {
        if (!this.vertices[vertex]) {
            this.addVertex(vertex)
        }
        if (!this.vertices[edge]) {
            this.addVertex(edge)
        }

        this.vertices[vertex].push(edge)
        if (isBidirectional) {
            this.vertices[edge].push(vertex)
        }
    }

    display() {
        for (const key in this.vertices) {
            let values = this.vertices[key].join(' ')
            console.log(key, ': ', values);
        }
    }

    breadthFirstSearch(startingNode) {
        const visited = {};
        const queue = [startingNode];
        const result = [];

        visited[startingNode] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            for (const neighbor of this.vertices[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

}


const bfs = new BFS();
bfs.insert(3, 5, true)
bfs.insert(3, 4, true)
bfs.insert(5, 6, false)
bfs.insert(6, 3, false)
bfs.insert(6, 8, true)
bfs.display()
console.log('BFS : ', bfs.breadthFirstSearch(3));
console.log('Graph is :', bfs.vertices);


