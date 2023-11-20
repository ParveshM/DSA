function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, mid)
    const lastHalf = arr.slice(mid, arr.length)
    console.log('\nfirst half :', firstHalf, 'Second halg :', lastHalf);
    return join(mergeSort(firstHalf), mergeSort(lastHalf))
}

function join(firstHalf, lastHalf) {
    console.log('\ninside join :- FirstHalf', firstHalf, ' Secondhalf : ', lastHalf);
    let newArray = [];
    let i = 0, j = 0;

    while (i < firstHalf.length && j < lastHalf.length) {
        if (firstHalf[i] < lastHalf[j]) {
            newArray.push(firstHalf[i++]);
        } else {
            newArray.push(lastHalf[j++]);
        }
    }

    while (i < firstHalf.length) {
        newArray.push(firstHalf[i++]);
    }
    while (j < lastHalf.length) {
        newArray.push(lastHalf[j++]);
    }
    console.log('\nNew Array after join', newArray);
    return newArray
}

const arr = [11, 2, 333, 14, 5, 110, 10]
console.log(mergeSort(arr));