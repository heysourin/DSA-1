"use strict";

const arr1 = [-2, -3, 4, -1, -2, 1, 5, -3];
const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const MaxSubArr = (arr) => {
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  console.log(maxSum);
};

MaxSubArr(arr2);
MaxSubArr(arr1);
