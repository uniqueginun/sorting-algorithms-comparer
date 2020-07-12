import { swap } from "../utils/utilities";

const insertionSort = (arrayOfItems) => {
  let steps = [];
  for (let i = 1; i < arrayOfItems.length; i++) {
    let current = arrayOfItems[i];
    let j = i - 1;
    while (j >= 0 && arrayOfItems[j] > current) {
      swap(arrayOfItems, j, j + 1);
      let step = [...arrayOfItems].map((item) => {
        return { height: item, isCurrent: item === i || item === i - 1 };
      });
      steps.push(step);
      j--;
    }
    swap(arrayOfItems, j + 1, arrayOfItems.indexOf(current));
    let step = [...arrayOfItems].map((item) => {
      return { height: item, isCurrent: item === i || item === i - 1 };
    });
    steps.push(step);
  }
  return steps;
};

export default insertionSort;
