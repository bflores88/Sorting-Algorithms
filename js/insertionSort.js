function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let temp = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr;
}

let test = [9, 30, 3, 23, 35, 1, 4, 8, 3, 12];

insertionSort(test);