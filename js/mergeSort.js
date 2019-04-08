function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let half = Math.floor(arr.length / 2);
  let left = arr.splice(0, half);

  let leftRecursive = mergeSort(left);
  let rightRecursive = mergeSort(arr);

  let sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftRecursive.length && rightIndex < rightRecursive.length) {
    if (leftRecursive[leftIndex] < rightRecursive[rightIndex]) {
      sorted.push(leftRecursive[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(rightRecursive[rightIndex]);
      rightIndex++;
    }
  }
  return sorted.concat(leftRecursive.slice(leftIndex)).concat(rightRecursive.slice(rightIndex))
}

let test = [9, 30, 3, 23, 35, 25, 1, 4, 8, 3, 12];

mergeSort(test);