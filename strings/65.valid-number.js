/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {

    let dotCountBeforeExp = 0;

    let hasExp = false;

    let numsBeforeExp = false;

    let numsAfterExp = false;

    let signAfterExp = false;

    let hasSignBeforeExp = false;

    for (let i = 0; i < s.length; i++) {

        let char = s[i];

        // Digit
        if (char >= '0' && char <= '9') {

            if (!hasExp) {
                numsBeforeExp = true;
            } else {
                numsAfterExp = true;
            }

            continue;
        }

        // Dot
        if (char == '.') {

            // dot not allowed after exponent
            if (hasExp) {
                return false;
            }

            if (dotCountBeforeExp >= 1) {
                return false;
            }

            dotCountBeforeExp++;

            continue;
        }

        // Exponent
        if (char == 'e' || char == 'E') {

            // only one exponent
            if (hasExp) {
                return false;
            }

            // must have digits before exponent
            if (!numsBeforeExp) {
                return false;
            }

            // cannot end with e
            if (i == s.length - 1) {
                return false;
            }

            hasExp = true;
            continue;
        }

        // Sign
        if (char == '+' || char == '-') {

            if (!hasExp) {

                // only allowed at first position
                if (i != 0 || hasSignBeforeExp) {
                    return false;
                }

                hasSignBeforeExp = true;

            } else {

                // only allowed immediately after e
                if (s[i - 1] != 'e' && s[i - 1] != 'E') {
                    return false;
                }

                if (signAfterExp) {
                    return false;
                }

                if (i == s.length - 1) {
                    return false;
                }

                signAfterExp = true;
            }

            continue;
        }

        // Invalid character
        return false;
    }

    if (!numsBeforeExp) {
        return false;
    }

    if (hasExp && !numsAfterExp) {
        return false;
    }

    return true;
};
// @lc code=end

