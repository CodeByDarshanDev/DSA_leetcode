/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {


    let reverseNumber = Number(String(x).split('').reverse("").join(''));

    if (Number(x) === reverseNumber) {
        return true;
    } else {
        return false;
    }
};
// @lc code=end

