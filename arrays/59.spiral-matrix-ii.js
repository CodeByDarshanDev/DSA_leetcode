/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    // get refernce for leetcode problem number 54 Spiral matrix
    // just created array filled with '.' 
    // while travering spirally in the matrix place number and increment number for next cell
    let matrix = Array.from({ length: n }, () => Array(n).fill('.'));
    let top = 0;
    let right = n - 1;
    let left = 0;
    let bottom = n - 1;
    let init = 1;

    function placeNum() {
        for (let c = left; c <= right; c++) {
            matrix[top][c] = init;
            init++;
        }
        top++;

        for (let r = top; r <= bottom; r++) {
            matrix[r][right] = init;
            init++;
        }
        right--;

        if (top < bottom) {
            for (let c = right; c >= left; c--) {
                matrix[bottom][c] = init;
                init++;
            }
            bottom--;
        }

        if (left < right) {
            for (let r = bottom; r >= top; r--) {
                matrix[r][left] = init;
                init++;
            }
            left++;
        }
    }
    while (left <= right && top <= bottom) {
        placeNum();
    }
    return matrix;
};
// @lc code=end

