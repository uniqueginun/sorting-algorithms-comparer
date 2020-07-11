import { swap } from "../utils/utilities";

const insertionSort = (arrayOfItems) => {
  let steps = [];
  for (let i = 1; i < arrayOfItems.length; i++) {
    let current = arrayOfItems[i];
    let j = i - 1;
    while (j >= 0 && arrayOfItems[j] > current) {
      swap(arrayOfItems, j, j + 1);
      steps.push([...arrayOfItems]);
      j--;
    }
    swap(arrayOfItems, j + 1, arrayOfItems.indexOf(current));
    steps.push([...arrayOfItems]);
  }
  return steps;
};

export default insertionSort;
