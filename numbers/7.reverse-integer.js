/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let intSign = Math.sign(x);
    let absoluteValue = Math.abs(x);

    let reverseValueArray = Number(String(absoluteValue).split('').reverse().join('')) * intSign;

    if (reverseValueArray < -(2 ** 31) || reverseValueArray > (2 ** 31 - 1)) {
        return 0;
    }

    return reverseValueArray;
};
// @lc code=end

