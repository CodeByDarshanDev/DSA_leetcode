/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let finalArray = [];
    nums.sort((a, b) => a - b);
    // let curPermute = nums;

    function backtrack(curPermute) {
        let pivot = -1;
        let successor = curPermute.length - 1;
        for (let index = curPermute.length - 1; index >= 0; index--) {
            if (curPermute[index - 1] < curPermute[index]) {
                pivot = index - 1;
                break;
            }
        }

        if (pivot == -1) return false;

        while (curPermute[successor] <= curPermute[pivot]) {
            successor--;
        }

        [curPermute[pivot], curPermute[successor]] = [curPermute[successor], curPermute[pivot]]

        const sortedPart = curPermute.slice(pivot + 1).sort((a, b) => a - b);

        curPermute.splice(pivot + 1, sortedPart.length, ...sortedPart);

        return true;
    }
    do {
        finalArray.push([...nums]);
    } while (backtrack(nums));
    return finalArray;
};
// @lc code=end

