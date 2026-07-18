/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let set = new Set(nums);
    let index = 1;
    while (set.has(index)) {
        index++;
    }
    return index;
};
// @lc code=end

