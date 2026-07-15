/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // find pivot index
    let pivot = -1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivot = i;
            break;
        }
    }

    //reverse if there is no pivot index
    if (pivot == -1) {
        nums.reverse();
        return nums;
    }

    // find the large number from the pivot index
    for (let i = nums.length - 1; i >= pivot; i--) {
        if (nums[i] > nums[pivot]) {
            [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
            break;
        }
    }

    //now reverse the all remaining element after the pivot index
    if (pivot < nums.length - 2) {
        let secondArray = nums.slice(pivot + 1);
        secondArray.reverse();
        nums.splice(pivot + 1, secondArray.length, ...secondArray);
    }
    return nums;
};
// @lc code=end