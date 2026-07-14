/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let k = 1;
    // just need to compare current element to previous element
    // if not same then chage the nums at k position 
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] !== nums[index - 1]) {
            nums[k] = nums[index]
            k++;
        }

    }

    return k;
};
// @lc code=end

