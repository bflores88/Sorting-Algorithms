function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }

  let left = [];
  let right = [];
  let newArr = [];
  let pivot = arr.pop();

  for(let i=0; i<arr.length; i++){
    if(arr[i] > pivot){
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return newArr.concat(quickSort(left), pivot, quickSort(right));
};

let test = [7, 9, 10, 23, 35, 1, 4, 8, 3, 12];

quickSort(test);
