// Maximum and Minimum Element in an Array

"use strict";

let arr1 = [12,143,1,134,-1239,1,232,9494,23,95,35,957];
let arr2 = [21,-33,289,91,-999,2992];


const findMax = (arr)=> {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(`Max: ${max}`);
};

const findMin = (arr)=> {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(`Min: ${min}`);
};

findMax(arr2);
findMin(arr2);
