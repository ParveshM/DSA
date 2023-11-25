function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr));
