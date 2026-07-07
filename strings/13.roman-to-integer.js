/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const commanRoman = ["I", "V", "X", "L", "C", "D", "M"];
    const commanRomanValue = [1, 5, 10, 50, 100, 500, 1000];

    let finalNumber = 0;

    let index = 0;
    while (index < s.length) {

        if (index > s.length) {
            return finalNumber;
        }
        let currentItem = s[index] ? commanRoman?.indexOf(s[index]) : -1;
        let nextItem = s[index + 1] ? commanRoman?.indexOf(s[index + 1]) : -1;

        if (currentItem >= nextItem) {
            finalNumber += commanRomanValue[currentItem];
            index++;
        } else {
            finalNumber += commanRomanValue[nextItem] - commanRomanValue[currentItem];
            index += 2;
        }
    }

    return finalNumber;
};
// @lc code=end

