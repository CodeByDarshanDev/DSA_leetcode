/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = [];

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let c = left; c <= right; c++) {
            result.push(matrix[top][c]);
        }
        top++;

        for (let r = top; r <= bottom; r++) {
            result.push(matrix[r][right]);
        }
        right--;

        if (bottom >= top) {
            for (let c = right; c >= left; c--) {
                result.push(matrix[bottom][c]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let r = bottom; r >= top; r--) {
                result.push(matrix[r][left]);
            }
            left++;
        }
    }
    return result;
};
// @lc code=end

