/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;

    let matrixRows = numRows;
    let matrixCols = s.length;

    let matrix = Array.from({ length: matrixRows }, () => Array(matrixCols).fill(" "));

    let currentRow = 0;
    let currentCol = 0;
    let direction = "down";
    for (let index = 0; index < s.length; index++) {
        matrix[currentRow][currentCol] = s[index];

        if (direction == "down") {
            if (currentRow == matrixRows - 1) {
                direction = 'up';
                currentRow--;
                currentCol++;
                continue;
            } else {
                currentRow++;
            }
        }

        if (direction == "up") {
            if (currentRow == 0) {
                direction = 'down';
                currentRow++;
                continue;
            } else {
                currentRow--;
                currentCol++;
            }
        }
    }

    let finalString = '';
    for (let rowindex = 0; rowindex < matrixRows; rowindex++) {
        for (let colindex = 0; colindex < matrixCols; colindex++) {
            finalString += matrix[rowindex][colindex];
        }
    }
    return finalString.replace(/\s/g, "");
};
// @lc code=end

