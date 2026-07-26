/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// At every position:

// Either start a new subarray from current element
// Or extend the previous subarray
var maxSubArray = function (nums) {
    let current = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i]);
        maxSum = Math.max(maxSum, current);
    }

    return maxSum;
};
// @lc code=end

