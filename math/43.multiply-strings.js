/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {

    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let result = new Array(num1.length + num2.length).fill(0);

    // Multiply digits from right to left
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let digit1 = num1.charCodeAt(i) - 48;
            let digit2 = num2.charCodeAt(j) - 48;

            let product = digit1 * digit2;

            let pos1 = i + j;
            let pos2 = i + j + 1;

            let sum = product + result[pos2];

            result[pos2] = sum % 10;
            result[pos1] += Math.floor(sum / 10);
        }
    }

    // Convert digit array to string and remove leading zeros
    return result.join("").replace(/^0+/, "");

};
// @lc code=end

