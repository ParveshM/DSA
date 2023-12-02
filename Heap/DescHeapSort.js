
function heapify(arr, n, i) {
    let large = i
    let left = 2 * i + 1
    let right = 2 * i + 2;

    if (left < n && arr[large] > arr[left]) {
        large = left
    }
    if (right < n && arr[large] > arr[right]) {
        large = right
    }

    if (large !== i) {
        [arr[large], arr[i]] = [arr[i], arr[large]]
        heapify(arr, n, large)
    }
}

function heapSort(arr) {
    const n = arr.length

    // heapify
    for (let i = Math.floor((n / 2) - 1); i >= 0; i--) {
        heapify(arr, n, i)
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[1], arr[0]] = [arr[0], arr[1]]
        heapify(arr, i, 0)
    }

    return arr
}

const arr = [85, 65, 7, 100, 8, 4]
console.log('\nDescending sorted heap : ', heapSort(arr));