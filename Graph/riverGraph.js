class riverGraph {

    checkRiversize(matrix) {
        let visited = [];
        for (let i = 0; i < matrix.length; i++) {
            visited[i] = new Array(matrix[0].length).fill(false);
        }
        let sizes = [];


        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (visited[i][j]) {
                    continue;
                } else {
                    this.traverseThroughRiver(i, j, matrix, visited, sizes)

                }
            }

        }
        return sizes;
    }

    traverseThroughRiver(i, j, matrix, visited, sizes) {
        let currRiverSize = 0;
        let nodToexplore = [];
        nodToexplore.push([i, j])

        while (nodToexplore.length) {
            let currNode = nodToexplore.pop()
            i = currNode[0];
            j = currNode[1];

            if (visited[i][j]) {
                continue
            }
            visited[i][j] = true;
            if (matrix[i][j] === 0) {
                continue;
            }
            currRiverSize++;
            const nearest = this.getNearestNodes(i, j, matrix, visited)
            for (let node of nearest) {
                nodToexplore.push(node);
            }
        }
        if (currRiverSize > 0) {
            sizes.push(currRiverSize);
        }

    }

    getNearestNodes(i, j, matrix, visited) {
        let nearest = [];
        if (i > 0 && !visited[i - 1][j]) {
            nearest.push([i - 1, j])
        }
        if (i < matrix.length - 1 && !visited[i + 1][j]) {
            nearest.push([i + 1, j])
        }
        if (j > 0 && !visited[i][j - 1]) {
            nearest.push([i, j - 1])
        }
        if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
            nearest.push([i, j + 1])
        }
        return nearest;
    }
}

const river = new riverGraph()
const matrix = [
    [1, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1]
];
console.log('sizes', river.checkRiversize(matrix));