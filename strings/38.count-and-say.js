/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return '1';
    }

    function RLE(value) {
        //it is base case
        if (value === 1) {
            return '1';
        }

        let RLEResult = RLE(value - 1);
        let tempString = '';

        let count = 1;
        for (let index = 1; index < RLEResult.length; index++) {
            if (RLEResult[index] == RLEResult[index - 1]) {
                count++;
            } else {
                tempString += count + RLEResult[index - 1];
                count = 1;
            }
        }
        tempString += count + RLEResult[RLEResult.length - 1];

        return tempString;
    }

    let finalResult = RLE(n);
    return finalResult;
};
// @lc code=end

