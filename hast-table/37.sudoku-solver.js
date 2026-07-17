/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {

            const value = board[r][c];

            // calculate the box Number
            const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (value !== ".") {
                rows[r].add(value);
                cols[c].add(value);
                boxes[box].add(value);
            }
        }
    }


    function backtrack() {
        // Find the next empty cell
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {

                if (board[r][c] !== ".") continue;

                const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // Try digits 1-9
                for (let num = 1; num <= 9; num++) {
                    const digit = String(num);

                    if (
                        rows[r].has(digit) ||
                        cols[c].has(digit) ||
                        boxes[box].has(digit)
                    ) {
                        continue;
                    }

                    // Place digit
                    board[r][c] = digit;
                    rows[r].add(digit);
                    cols[c].add(digit);
                    boxes[box].add(digit);

                    // Continue solving
                    if (backtrack()) {
                        return true;
                    }

                    // // Undo (Backtrack)
                    // After getting false from next case in oprevious case the placed number got deleted and tries to place new number until the sudou get solved.
                    board[r][c] = ".";
                    rows[r].delete(digit);
                    cols[c].delete(digit);
                    boxes[box].delete(digit);
                }

                // if there in no matching from 1 to 9 in the empty cells then it returns false
                return false;
            }
        }

        // After searching all the cell there are no empty cell left then return true
        return true;
    }

    backtrack();
};
// @lc code=end


// for (let newRow = 0; newRow < 9; newRow++) {
//     for (let newCol = 0; newCol < 9; newCol++) {

//         const value = board[newRow][newCol];

//         // calculate the box Number
//         const box = Math.floor(newRow / 3) * 3 + Math.floor(newCol / 3);

//         if (value == ".") {
//             for (let newVal = 1; newVal < 10; newVal++) {
//                 const digit = String(newVal);
//                 if (
//                     rows[newRow].has(digit) ||
//                     cols[newCol].has(digit) ||
//                     boxes[box].has(digit)
//                 ) {
//                     continue;
//                 }
//                 board[newCol][newRow] = digit;
//                 rows[newRow].add(digit);
//                 cols[newCol].add(digit);
//                 boxes[box].add(digit);


//             }
//         }
//     }
// }