import { swap } from "../utils/utilities";

let steps = [];

const QuickSort = (unsortedList) => {
  doSort(unsortedList, 0, unsortedList.length - 1);
  return steps;
};

let doSort = (arr, start, end) => {
  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end);
  doSort(arr, start, index - 1);
  doSort(arr, index + 1, end);
};

function partition(arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      steps.push([...arr]);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);
  steps.push([...arr]);
  return pivotIndex;
}

export default QuickSort;
