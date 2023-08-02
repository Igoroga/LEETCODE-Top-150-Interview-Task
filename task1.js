// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
//  representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

let merge = function (nums1, m, nums2, n) {
    let nums11 = nums1.slice(0, m);
    let nums22 = nums2.slice().sort(); // Создание копии nums2 перед сортировкой
    let nums3 = [...nums11, ...nums22];
    nums3.sort((a,b) => a-b);
    for (let i = 0; i < nums3.length; i++) {
        nums1[i] = nums3[i];
    }

    return nums1;
};

// Пример использования функции
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

let result = merge(nums1, m, nums2, n);
console.log(result); // Вывод: [ 1, 2, 2, 3, 5, 6 ]