/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// passes in just one try
var removeElement = function (nums, val) {
    if (nums.length == 0) return 0;

    let k = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] == val) {
            delete nums[index];
        } else {
            k++;
        }
    }
    nums.sort((a, b) => a - b);
    return k;
};
// @lc code=end

