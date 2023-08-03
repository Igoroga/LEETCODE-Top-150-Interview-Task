// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k,to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:


var removeElement = function (nums, val) {
    let k = 0
    
    let nums1 = nums.filter((a) => {
        if (a == val) {
            
            return false
        }
        k +=1
        return true
    })

    for (let i = 0; i < nums.length; i++) {
         nums[i] = nums1[i] || 0;
        
    }
    console.log(nums);

    return k
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const result = removeElement(nums, val);
console.log(result); // Output: 5