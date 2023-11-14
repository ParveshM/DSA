function binaryIter(arr, target) {
    let startInd = 0;
    let endInd = arr.length;

    while (startInd < endInd) {
        const middle = Math.floor(startInd + (endInd - startInd) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] > target) {
            endInd = middle - 1;
        } else {
            startInd = middle + 1;
        }
    }

    return middle;
}

const arr = [1, 2, 3, 4];
console.log('jim jam', binaryIter(arr, 3));
