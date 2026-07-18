/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let maxCap = 0;
    let n = height.length;

    let leftMax = new Array(n);
    let rightMax = new Array(n);

    leftMax[0] = height[0];
    for (let left = 1; left < height.length; left++) {
        leftMax[left] = Math.max(leftMax[left - 1], height[left]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let right = n - 2; right >= 0; right--) {
        rightMax[right] = Math.max(rightMax[right + 1], height[right]);
    }

    for (let index = 0; index < n; index++) {
        let water = Math.max(0, Math.min(leftMax[index], rightMax[index]) - height[index]);
        maxCap += water;
    }
    return maxCap;
};
// @lc code=end

//un-optimized version for water calculation//
// var trap = function (height) {
//     let maxCap = 0;

//     for (let index = 1; index < height.length - 1; index++) {

//         let leftMax = Math.max(...height.slice(0, index)) || 0;
//         let rightMax = Math.max(...height.slice(index + 1, height.length)) || 0;
//         let water = Math.max(0, Math.min(leftMax, rightMax) - height[index]);
//         maxCap += water;
//     }
//     return maxCap;
// };