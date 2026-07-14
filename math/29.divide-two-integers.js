/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let calc = dividend / divisor;
    let sign = Math.sign(calc);
    let quotient = Math.floor(calc * sign) * sign;

    if (quotient > (2 ** 31) - 1) return (2 ** 31 - 1);
    if (quotient < -(2 ** 31)) return -(2 ** 31);

    return quotient;
};
// @lc code=end

