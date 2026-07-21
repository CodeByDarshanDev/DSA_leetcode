/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = new Map();

    for (let index = 0; index < strs.length; index++) {
        const element = strs[index];

        let key = element.split("").sort().join('');

        if (!result.has(key)) {
            result.set(key, []);
        }

        result.get(key).push(element);
    }
    return [...result.values()];
};
// @lc code=end

