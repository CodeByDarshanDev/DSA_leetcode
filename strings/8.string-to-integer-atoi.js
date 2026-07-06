/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let trimmedValue = s.trim();

    let signOfString = 1;
    let filterNumber = "";

    let index = 0;

    if (trimmedValue[0] === "+") {
        index = 1;
    } else if (trimmedValue[0] === "-") {
        signOfString = -1;
        index = 1;
    }


    for (; index < trimmedValue.length; index++) {

        if (/\d/.test(trimmedValue[index])) {
            filterNumber += trimmedValue[index];
        } else {
            break;
        }
    }
    let finalNumer = Number(filterNumber) * signOfString;

    let INT_MIN = -(2 ** 31);
    let INT_MAX = (2 ** 31 - 1);

    return Math.max(INT_MIN, Math.min(finalNumer, INT_MAX));
};

// @lc code=end

