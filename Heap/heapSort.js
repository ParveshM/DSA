function heapify(arr, n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[i] < arr[left]) {
        smallest = left;
    }

    if (right < n && arr[smallest] < arr[right]) {
        smallest = right;
    }

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, n, smallest);
    }
}

function heapSort(arr) {
    const n = arr.length;

    // Heapifying the current array
    for (let i = Math.floor(n - 1); i >= 0; i--) {
        heapify(arr, n, i);
    }

    // sorting the array by swapping top and last elements 
    for (let i = n - 1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        heapify(arr, i, 0);
    }

    return arr;
}

// const a = ["Ant", "Bat", "Cat", "Dog"];
const a = [85, 65, 7, 100, 8, 4]
console.log(`After heap sort (Ascending): ${heapSort(a)}`);
