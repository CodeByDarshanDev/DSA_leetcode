/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let buttonsObj = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    let alphabets = [];

    for (let i1 = 0; i1 < digits.length; i1++) {
        alphabets.push(buttonsObj[Number(digits[i1])]);
    }

    if (alphabets.length <= 1) {
        return alphabets.flat(Infinity);
    }
    let combinations = alphabets.reduce((accum, current) => accum.flatMap((prefix) => current.map((value) => prefix + value)));

    return combinations;
};
// @lc code=end

