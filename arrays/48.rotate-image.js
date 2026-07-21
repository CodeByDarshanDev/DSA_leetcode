/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    n = matrix.length;
    let arr = Array.from({ length: n }, () => []);

    for (let i = matrix.length - 1; i >= 0; i--) {

        for (let j = 0; j < matrix.length; j++) {

            arr[j].push(matrix[i][j]);
        }
    }

    //i put this because of i want to modify the matrics array with new arr values
    for (let i = 0; i < n; i++) {
        matrix[i] = arr[i];
    }
};
// @lc code=end

