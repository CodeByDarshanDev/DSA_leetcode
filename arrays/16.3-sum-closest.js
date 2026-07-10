/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let closestValue = nums[0] + nums[1] + nums[2];


    for (let index1 = 0; index1 < nums.length - 2; index1++) {


        let left = index1 + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[index1] + nums[left] + nums[right];

            if (Math.abs(target - sum) < Math.abs(target - closestValue)) {
                closestValue = sum;
            }

            if (sum === target) {
                return sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

    }
    return closestValue;
};
// @lc code=end

