// You are given an integer array nums.
// You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

var canJump = function (nums) {
    let k = false
    let len = nums.length
    let arr = 0
 
    if (len == 1) {
       return true;
    }
 
    for (let i = 0; i < nums.length; i++) {
       arr += 1
       if (nums[i] + arr >= len) {
         return true
       }
       if (nums[i] == 0) {
          let jump = 2
          if (i == 0) {
             return false
          }
          for (let j = i - 1; j > -1; j--) {
             if (nums[j] < jump) {
                arr = arr - 1
                jump += 1
                 if (j <= 0) {
                 return false
             }
                continue
             } else {
                arr += jump-2
                break
             }
 
          }
       } 
    }
 };



canJump([1,0,2])

// Input: nums = [2,3,1,1,4]
// Output: true

