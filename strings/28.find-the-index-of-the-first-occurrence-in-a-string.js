/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let occurance = -1;
    for (let index = 0; index < haystack.length; index++) {
        if (needle[0] == haystack[index]) {
            if (haystack.substring(index, index + needle.length) == needle) {
                return index;
            }
        }
    }
    return occurance;
};
// @lc code=end

