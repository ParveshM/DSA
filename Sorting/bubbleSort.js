function bubbleSort(arr) {
    let swapped;
    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        console.log(`After ${i}th iteration`,arr);zz
        if (swapped == false)
            break;
    }
    console.log(arr);
}

const arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);

