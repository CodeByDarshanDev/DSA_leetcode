/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let tripletArray = [];

    for (let i1 = 0; i1 < nums.length - 3; i1++) {
        if (i1 > 0 && nums[i1] === nums[i1 - 1]) continue;

        for (let i2 = i1 + 1; i2 < nums.length - 2; i2++) {

            if (i2 > i1 + 1 && nums[i2] === nums[i2 - 1]) continue;

            let left = i2 + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[i1] + nums[i2] + nums[left] + nums[right];
                let tempArray = [nums[i1], nums[i2], nums[left], nums[right]];

                if (sum === target) {
                    tripletArray.push(tempArray);

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return tripletArray;
};
// @lc code=end
