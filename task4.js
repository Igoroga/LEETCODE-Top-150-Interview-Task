// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice.
// The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


var removeDuplicates = function(nums) {
    let k = 0 
    let map1 = new Map()
    let arr = []

    for (let i = 0; i<nums.length; i++){
       if(map1.get(nums[i])){
          map1.set(nums[i],map1.get(nums[i])+1)
          if (map1.get(nums[i])<=2){arr.push(nums[i])}
      }else{
         map1.set(nums[i], 1)
         arr.push(nums[i])
         }
      }
    
    for (let i = 0; i<nums.length; i++){
       nums[i] = arr[i] 
    }

    k = arr.length

    return k
};


removeDuplicates([1,1,1,2,2,3])


// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]