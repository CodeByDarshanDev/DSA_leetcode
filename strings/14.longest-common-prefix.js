/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let longestString = '';

    for (let index = 0; index < strs[0].length; index++) {

        let tempString = '';

        for (let innerItem = 0; innerItem < strs.length; innerItem++) {
            if (strs[0][index] == strs[innerItem][index]) {
                tempString += strs[0][index];
            }
        }
        if (tempString.length == strs.length) {
            longestString += tempString[0];
        } else {
            break;
        }

    }
    return longestString;
};
// @lc code=end

