/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const board = Array.from({ length: n }, () => Array(n).fill("."));
    const column = new Set();
    const diag1 = new Set(); // row - col
    const diag2 = new Set(); // row + col
    const result = [];

    function solve(row) {
        if (row === n) {
            result.push(board.map(row => row.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {

            if (
                column.has(col) ||
                diag1.has(row - col) ||
                diag2.has(row + col)
            ) {
                continue;
            }

            // Place queen
            board[row][col] = "Q";
            column.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            solve(row + 1);

            // Backtrack
            board[row][col] = ".";
            column.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);

        }
    }
    solve(0);
    return result;
};
// @lc code=end

