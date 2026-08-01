/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let arr = Array.from({ length: m }, () => Array(n).fill(-1));

    function backtrack(r, c) {
        if (r >= m || c >= n) return Infinity;

        if (r == m - 1 && c == n - 1) {
            return grid[r][c];
        }
        if (arr[r][c] != -1) {
            return arr[r][c];
        }
        // we have consider current value and previous minimum value that we calculated at base cases 
        arr[r][c] = grid[r][c] + Math.min(backtrack(r + 1, c), backtrack(r, c + 1));
        return arr[r][c];
    }
    return backtrack(0, 0);
};
// @lc code=end

