/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    const board = Array.from({ length: n }, () => Array(n).fill("."));

    const column = new Set();
    const diag1 = new Set();
    const daig2 = new Set();
    let result = 0;

    function solve(row) {
        if (row === n) {
            result++;
            return;
        }

        for (let col = 0; col < n; col++) {

            if (column.has(col) || diag1.has(row - col) || daig2.has(row + col)) {
                continue;
            }

            // place
            board[row][col] = 'Q';
            column.add(col);
            diag1.add(row - col);
            daig2.add(row + col);

            solve(row + 1);

            // delete
            board[row][col] = '.';
            column.delete(col);
            diag1.delete(row - col);
            daig2.delete(row + col);

        }
    }
    solve(0);
    return result;
};
// @lc code=end

