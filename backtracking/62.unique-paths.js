/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// thie method store possible paths counts in their cell by cellwise
var uniquePaths = function (m, n) {
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    function backtrack(r, c) {
        if (r >= m || c >= n) {
            return 0;
        }

        if (r === m - 1 && c === n - 1) {
            return 1;
        }

        // this if statement checks that if cell have already calculated the path count from cell to distance then return its value rather then recalculating 
        if (memo[r][c] !== -1) {
            return memo[r][c];
        }

        memo[r][c] = backtrack(r, c + 1) + backtrack(r + 1, c);

        return memo[r][c];
    }

    return backtrack(0, 0);
};
// @lc code=end

// Solution 1 un-optimized Solution
// var uniquePaths = function (m, n) {
//     let paths = 0;

//     function backtrack(r, c) {
//         if (r >= m || c >= n) return;
//         if (r === m - 1 && c === n - 1) {
//             paths++;
//         }

//         if (r == m - 1) {
//             backtrack(r, c + 1);
//         } else if (c == n - 1) {
//             backtrack(r + 1, c);
//         } else {
//             backtrack(r, c + 1);
//             backtrack(r + 1, c);
//         }
//         return;
//     }
//     backtrack(0, 0);
//     return paths;
// };