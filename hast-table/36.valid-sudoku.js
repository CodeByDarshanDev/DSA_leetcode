/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */

// #My code basic
// var isValidSudoku = function (board) {

//     for (const element of board) {
//         let rowArray = [];
//         for (const num of element) {
//             if (num != '.') {
//                 if (rowArray.includes(num)) {
//                     return false;
//                 } else {
//                     rowArray.push(num);
//                 }
//             }
//         }
//         rowArray = [];
//     }

//     for (let i1 = 0; i1 < board[0].length; i1++) {
//         let colArray = [];
//         for (let i2 = 0; i2 < board.length; i2++) {
//             if (board[i2][i1] != '.') {
//                 if (colArray.includes(board[i2][i1])) {
//                     return false;
//                 } else {
//                     colArray.push(board[i2][i1]);
//                 }
//             }
//         }
//         colArray = [];
//     }

//     for (let i = 0; i < board.length; i += 3) {

//         for (let j = 0; j < board[0].length; j += 3) {

//             let boxArray = [];
//             for (let i1 = i; i1 < i + 3; i1++) {

//                 for (let j1 = j; j1 < j + 3; j1++) {
//                     if (board[i1][j1] != '.') {
//                         if (boxArray.includes(board[i1][j1])) {
//                             return false;
//                         } else {
//                             boxArray.push(board[i1][j1]);
//                         }
//                     }

//                 }

//             }
//         }

//     }

//     return true;
// };

var isValidSudoku = function (board) {

    // this each array element creates set for storing the row values and column values
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    // each index number equal to box index number
    // so we match the box number to array index and place the unique value from box number to exact same index number of array
    // each box number has unique index number
    // before add the value we check if the value from box number and  that number rom Boxes index set contain the value or not 
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {

            const value = board[r][c];

            if (value === ".") continue;

            // calculate the box Number
            const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (
                rows[r].has(value) ||
                cols[c].has(value) ||
                boxes[box].has(value)
            ) {
                return false;
            }

            rows[r].add(value);
            cols[c].add(value);
            boxes[box].add(value);
        }
    }

    return true;
};
// @lc code=end

