function partition(arr, low, high) {
  // last index aspivot element  
  let pivot = arr[high];
  let i = low ;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) { //if any element found less than pivot swap it 
      swap(arr, i, j);
      i++;
    }
  }
  // move the pivot Element to its correct location and return the index 
  swap(arr, i , high);
  return i ;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function quickSort(arr, low, high) {
  if (low < high) {
    let p_location = partition(arr, low, high);
    // left sub array sorting <<<<---
    quickSort(arr, low, p_location - 1);
    // Right sub array sorting ---->>>>
    quickSort(arr, p_location + 1, high);
  }
  return arr;
}
const arr = [10, 80, 30, 90, 40];
console.log(quickSort(arr, 0, arr.length - 1));
