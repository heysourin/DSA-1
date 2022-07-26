"use strict";
const arr1 = ['Sourin','Denver','Max','Nairobi','Berlin'];
const arr2 = [1,354,121,73,11321,-435]

const linearSearch = (list, item) => {
  for (let i=0;i<list.length;i++) {
    if (list[i] === item) {
      return `Present at ${i}th index`;
    }
  }
  return `Not found`;
};

console.log(linearSearch(arr1,'Berlin'));     
console.log(linearSearch(arr2,74));     
