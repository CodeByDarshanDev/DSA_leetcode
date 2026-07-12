/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let array = [];

    function backtrack(str, open, close) {
        // If the string is complete
        if (str.length === n * 2) {
            array.push(str);
            return;
        }
        // # for both if statement
        // only half of the string length time it will add to the string 

        // and both '(' and ')' braackets are not place on invalid place due to calculation open counter and close counter and n value on every backtracking 

        // Add '('
        if (open < n) {
            backtrack(str + "(", open + 1, close);
        }

        // Add ')'
        if (close < open) {
            backtrack(str + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return array;

};
// @lc code=end

