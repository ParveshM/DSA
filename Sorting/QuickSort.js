function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length - 1);
    return arr
}
function quickSortHelper(arr, startIndx, endIndx) {
    if (startIndx >= endIndx) {
        return;
    }
    let pivot = startIndx; // initailly taking the 0th element
    let i = startIndx + 1; // i = large;
    let j = endIndx; // j = small;

    // Run the loop until the j or i cross each other;
    while (i <= j) {

        if (arr[i] > arr[pivot] && arr[j] < arr[pivot]) {
            // if the i is greater than pivot and j is less than pivot ,then Swap elements;
            swap(arr, i, j);
            i++;
            j--
        }

        if (arr[i] <= arr[pivot]) {
            i++;
        }

        if (arr[j] >= arr[pivot]) {
            j--;
        }
    }
    // if the i or j crossed swap the element with pivot
    swap(arr, j, pivot);
    quickSortHelper(arr, startIndx, j - 1);
    quickSortHelper(arr, j + 1, endIndx);
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


const arr = [110, 30, 2, 41, 56, 12]

console.log('Sorted :', quickSort(arr));