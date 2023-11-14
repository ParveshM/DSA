function findPair(array, target) {
    let set = new Set();
    let result = [];

    for (let i = 0; i < array.length; i++) {

        const match = target - array[i];

        if (set.has(match)) {
            result.push([array[i], match]);
        }
        set.add(array[i]);
    }
    console.log(set);
    return result;
}

const arr = [6, 7, 9, 4, 0, 2,10];
console.log(findPair(arr, 10));
