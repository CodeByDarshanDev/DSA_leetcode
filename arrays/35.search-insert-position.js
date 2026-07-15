/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.indexOf(target) >= 0) {
        return nums.indexOf(target);
    }

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] < target) {
            continue;
        } else if (nums[index] > target) {
            return index;
        }
    }
    return nums.length;
};
// @lc code=end

