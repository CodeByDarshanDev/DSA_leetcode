/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        lastArr = result[result.length - 1];
        currArr = intervals[i];

        if (currArr[0] <= lastArr[1]) {
            lastArr[1] = Math.max(lastArr[1], currArr[1]);
        } else {
            result.push(currArr);
        }
    }

    return result;
};
// @lc code=end

