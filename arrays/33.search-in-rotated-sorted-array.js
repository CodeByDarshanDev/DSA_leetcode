/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let index = nums.indexOf(target);
    if (index == undefined) {
        return -1;
    } else {
        return index;
    }
};
// @lc code=end

