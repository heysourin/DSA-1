"use strict";
const nums1 = [1, 4, 12, 78, 4];

var containsDuplicate = function(nums) {
    const map = {}
    for(const num of nums) {
        // If we have seen this num before return true
        if(map[num]) return true
        map[num] = true
    }
    return false
};

console.log(containsDuplicate(nums1));
