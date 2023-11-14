function replaceAnum(array, target) {
    let nonTargetIndex = 0;

    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== target) {
            let temp = array[i];
            array[i] = array[nonTargetIndex];
            array[nonTargetIndex] = temp;
            nonTargetIndex++;
        }
    }

    console.log('final array', array);
}

const array = [6, 1, 6, 7, 10, 4, 6, 3, 7, 6];
replaceAnum(array, 6);
