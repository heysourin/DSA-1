"use strict";
const arr1=[1,2,3,4,5];
let sum=0;

const calcSum=(arr)=>{
    for (let i=0;i<arr1.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}

calcSum(arr1);
