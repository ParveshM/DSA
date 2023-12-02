class Graph {
    constructor() {
        this.graph = {};
    }

    addVertex(vertex) {
        if (!this.graph[vertex]) {
            this.graph[vertex] = {};
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (!this.graph[vertex1] || !this.graph[vertex2]) {
            throw new Error('Vertex not found in the graph');
        }

        this.graph[vertex1][vertex2] = weight;
        this.graph[vertex2][vertex1] = weight; // For an undirected graph
    }

    dijkstra(start, end) {
        let priorityQueue = [[0, start]];
        let distances = {};
        let previousVertex = {};

        Object.keys(this.graph).forEach(vertex => {
            distances[vertex] = Infinity;
            previousVertex[vertex] = null;
        });


        distances[start] = 0;

        while (priorityQueue.length) {
            const [currentDistance, currentVertex] = priorityQueue.shift();

            if (currentDistance > distances[currentVertex]) {
                continue;
            }
            Object.entries(this.graph[currentVertex]).forEach((key) => {
                const [neighbor, weight] = key;
                const distance = currentDistance + weight;

                if (distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                    previousVertex[neighbor] = currentVertex;
                    priorityQueue.push([distance, neighbor]);
                }
            });
        }

        let shortestPath = [];
        let currentVertex = end;

        while (previousVertex[currentVertex]) {
            shortestPath.unshift(currentVertex);

            console.log('kk', previousVertex);
            currentVertex = previousVertex[currentVertex];
        }

        shortestPath.unshift(start);

        return [shortestPath, distances[end]];
    }
}

// Create a graph
const myGraph = new Graph();

// Add vertices
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addVertex('E');

// Add edges with weights
myGraph.addEdge('A', 'B', 4);
myGraph.addEdge('A', 'C', 2);
myGraph.addEdge('B', 'C', 5);
myGraph.addEdge('B', 'D', 10);
myGraph.addEdge('C', 'D', 3);
myGraph.addEdge('C', 'E', 1);
myGraph.addEdge('D', 'E', 7);

// Run Dijkstra's algorithm
const [shortestPath, shortestDistance] = myGraph.dijkstra('A', 'E');
console.log('Shortest Path:', shortestPath);
console.log('Shortest Distance:', shortestDistance);
console.log('\nGraph is ', myGraph.graph);