/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let memo = Array.from({ length: m }, () => Array(n).fill(-1));

    function backtrack(r, c) {
        if (r >= m || c >= n) return 0;


        // stopper for check that in way there is obstacle or not
        if (obstacleGrid[r][c] == 1) {
            return 0;
        }
        if (r === m - 1 && c === n - 1) {
            return 1;
        }

        if (memo[r][c] != -1) {
            return memo[r][c];
        }

        memo[r][c] = backtrack(r + 1, c) + backtrack(r, c + 1);
        return memo[r][c];
    }
    return backtrack(0, 0);
};
// @lc code=end