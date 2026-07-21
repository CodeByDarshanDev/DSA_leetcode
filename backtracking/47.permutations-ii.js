/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let finalArray = [];
    nums.sort((a, b) => a - b);

    function backtrack(array) {
        let pivot = -1;
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i - 1] < array[i]) {
                pivot = i - 1;
                break;
            }
        }

        if (pivot == -1) return false;
        let successor = array.length - 1;
        while (array[successor] <= array[pivot]) {
            successor--;
        }

        //swap the element
        [array[pivot], array[successor]] = [array[successor], array[pivot]];

        let reversed = array.slice(pivot + 1).sort((a, b) => a - b);

        array.splice(pivot + 1, reversed.length, ...reversed);

        return true;
    }

    do {
        finalArray.push([...nums]);
    } while (backtrack(nums));
    return finalArray;
};
// @lc code=end

