function insertionSort(arr) {
    for (let i = 1; i <= arr.length - 1; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = current
    }
    return arr
}


const arr = [110,30, 2, 41, 56, 12, 11, 22, 41]
console.log('Output is', insertionSort(arr));