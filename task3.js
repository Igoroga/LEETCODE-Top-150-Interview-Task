// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
//  The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.



var removeDuplicates = function(nums) {
    let map1 = new Map()

    for (let i = 0; i < nums.length; i++){
        map1.set(nums[i], i)
    }
    
    let mapArr = [...map1.keys()]
    
console.log(mapArr)
    for (let i = 0; i < nums.length; i++){
        nums[i] = mapArr[i]
    }

    return mapArr.length
};


removeDuplicates([0,0,1,1,1,1,2,3,3])