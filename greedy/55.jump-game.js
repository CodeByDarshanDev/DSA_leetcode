/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxVal = 0;

    for (let i = 0; i < nums.length; i++) {
        // if i value surplus the maxVal then it can not get the last element of Array
        if (i > maxVal) {
            return false;
        }
        maxVal = Math.max(maxVal, i + nums[i]);
    }
    return true;
};
// @lc code=end

