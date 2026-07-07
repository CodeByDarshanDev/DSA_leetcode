/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ];

    let tempNumber = num;
    let romanString = [];

    let index = 0;
    let element = 0;
    while (tempNumber > 0) {

        if (tempNumber >= values[element]) {
            romanString.push(symbols[element]);
            tempNumber = tempNumber - values[element];
            index++;
        } else {
            element++;
        }

    }
    return romanString.join('');
};
// @lc code=end

