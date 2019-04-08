function selectionSort(arr) {

  for(let i=0; i<arr.length-1; i++){
    let smallestIndex = i;
    for(let j = i+1; j<arr.length; j++){
      if(arr[j] < arr[smallestIndex]){
        smallestIndex = j;
      }  
    }
    if (i !== smallestIndex){
    var temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
    }
  }
  return arr;
}

  let test = [9, 30, 3, 23, 35, 1, 4, 8, 3, 12];

  selectionSort(test);