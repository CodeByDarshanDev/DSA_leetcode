/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    if (s.length <= 1) return 0;

    let stack = [-1]; // Base index
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // Store index of '('
            stack.push(i);
        } else {
            // Remove matching '(' (or the last boundary)
            stack.pop();

            if (stack.length === 0) {
                // No matching '('
                // Current ')' becomes the new boundary
                stack.push(i);
            } else {
                // Valid substring length
                let length = i - stack[stack.length - 1];
                maxLength = Math.max(maxLength, length);
            }
        }
    }

    return maxLength;
};
// @lc code=end

