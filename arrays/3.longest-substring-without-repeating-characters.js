/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longestarray = [];
    if (s.length == 0) {
        return 0;
    } else if (s.trim.length - 1 > 0 || s.length == 1) {
        return 1;
    } else {
        for (let string = 0; string < s.length; string++) {

            let temparr = [];
            for (let index = string; index < s.length; index++) {
                if (temparr.includes(s[index])) {
                    // temparr = [];
                    break;
                }
                temparr.push(s[index])


            }
            longestarray.push(temparr);
        }
        return Math.max(...longestarray.map(arr => arr.length));
    }
};
// @lc code=end