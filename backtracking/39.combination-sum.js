/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
    if ((candidates.length == 0) || (candidates.length == 1 && candidates[0] > target)) {
        return [];
    }
    let finalArray = [];

    let tempArray = [];


    function backtrack(start, remaining) {
        if (remaining === 0) {
            finalArray.push([...tempArray]);
            return;
        }

        for (let index = start; index < candidates.length; index++) {
            let element = candidates[index];

            if (element > remaining) {
                continue;
            }

            tempArray.push(element);

            backtrack(index, remaining - element);

            tempArray.pop();

        }
    }

    backtrack(0, target);

    return finalArray;
};
// @lc code=end