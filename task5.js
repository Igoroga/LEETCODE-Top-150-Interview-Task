// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function (nums) {
    let map1 = new Map()
 
 
    for (let i = 0; i < nums.length; i++) {
       if (map1.get(nums[i])) {
          map1.set(nums[i], map1.get(nums[i]) + 1)
       } else {
          map1.set(nums[i], 1)
       }
    }
 
    let arr = map1.entries()
    let k = nums[0]
 
    for (a of arr) {
       a[1] > map1.get(k) ? k = a[0] : _
    }
    console.log(map1.entries())
 
 
    return k
 };


//  Input: nums = [3,2,3]
// Output: 3