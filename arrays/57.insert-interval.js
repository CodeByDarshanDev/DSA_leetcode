/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let lastArr = result[result.length - 1];
        let currArr = intervals[i];

        if (currArr[0] <= lastArr[1]) {
            lastArr[1] = Math.max(lastArr[1], currArr[1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};
// @lc code=end

