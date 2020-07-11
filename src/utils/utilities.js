export const algorithms = ["quick", "insertion"];

export const mapAlgorithmNameToComponent = (arr) => {
  return arr.map((item) => `${item[0].toUpperCase() + item.slice(1)}Sort`);
};

export const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);

export const sleep = (ms = 1000) => new Promise((res) => setTimeout(res, ms));

export const copyAndRemove = (arr, e) => {
  return new Promise((res) => {
    arr = arr.filter((a) => a !== e.target.value);
    if (e.target.checked) {
      arr = [...arr, e.target.value];
    }
    res(arr);
  });
};

export const getArrayOfRandomIntegers = (min, max) => {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(generateRandomIntergersInRange(min, max));
  }
  return arr;
};

export const generateRandomIntergersInRange = (min, max) =>
  Math.floor(Math.random() * max) + min;
