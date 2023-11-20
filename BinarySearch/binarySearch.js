// Using while loop
function binaryIter(arr, target) {
    let startInd = 0;
    let endInd = arr.length - 1;
    while (startInd <= endInd) {
        const middle = Math.floor((startInd + endInd) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] > target) {
            endInd = middle - 1;
        } else {
            startInd = middle + 1;
        }
    }
    return -1;
}
// console.log('Index of Target element :', binaryIter(arr, 3));

// Using the rcursive function
function binaryRecursive(arr, target) {
    return binaryHelper(arr, target, 0, arr.length - 1)
}

function binaryHelper(arr, target, startIndex, endIndex) {

    if (startIndex > endIndex) {
        return -1;
    }
    const middle = Math.floor((startIndex + endIndex) / 2);

    if (arr[middle] === target) {
        return middle;
    } else if (arr[middle] > target) {
        return binaryHelper(arr, target, startIndex, middle - 1)
    } else {
        return binaryHelper(arr, target, middle + 1, endIndex)
    }
}
const arr = [1, 2, 3, 4];
console.log('Index of Target element :', binaryRecursive(arr, 4));




















var countNegatives = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        let start = 0
        let end = grid[i].length
        while (start < end) {
            const mid = Math.floor((start + end) / 2);

            if (grid[i][mid] < 0) {
                end = mid
            } else {
                start = mid + 1
            }

        }
        count += grid[i].length - start

    }
    return count
};
// const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// console.log('Total negative nums',countNegatives(grid));



