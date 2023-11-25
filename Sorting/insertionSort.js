
function insertionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j - 1] > nums[j]) {
            // Swap elements
            [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
            j--;
        }
    }
    return nums;
}


const arr = [110, 30, 2, 41, 56, 12, 11, 22, 41]
console.log('Output is', insertionSort(arr));