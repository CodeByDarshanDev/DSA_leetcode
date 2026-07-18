/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    let finalArray = [];
    let tempArray = [];

    function backtracking(start, remaining) {
        if (remaining === 0) {
            finalArray.push([...tempArray]);
            return
        }
        for (let index = start; index < candidates.length; index++) {
            if (index > start && candidates[index] === candidates[index - 1]) {
                continue;
            }
            const element = candidates[index];

            if (element > remaining) {
                continue;
            }
            tempArray.push(element);

            backtracking(index + 1, remaining - element);

            tempArray.pop();

        }
    }

    backtracking(0, target);
    return finalArray;
};
// @lc code=end

