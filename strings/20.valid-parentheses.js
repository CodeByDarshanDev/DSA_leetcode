/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length <= 1) {
        return false;
    }

    let tempArray = [];
    for (let index = 0; index < s.length; index++) {
        if (s[0] === ')' || s[0] === '}' || s[0] === ']') {
            return false;
        }

        if (index == 0) {
            tempArray.push(s[0]);
            continue;
        }

        if (s[index] == '(' || s[index] == '{' || s[index] == '[') {
            tempArray.push(s[index]);
            continue;
        }

        if (s[index] === ')') {
            if (tempArray[tempArray.length - 1] === '(') {
                tempArray.pop();
            } else {
                return false
            }
        }
        if (s[index] === '}') {
            if (tempArray[tempArray.length - 1] === '{') {
                tempArray.pop();
            } else {
                return false
            }
        }
        if (s[index] === ']') {
            if (tempArray[tempArray.length - 1] === '[') {
                tempArray.pop();
            } else {
                return false
            }
        }
    }
    return tempArray.length == 0 ? true : false;
};





// @lc code=end

//
// ## Method 2 not optimized as compare to methos 1
// var isValid = function (s) {
//     if (s.length <= 1) {
//         return false;
//     }

//     let tempArray = [];
//     for (let index = 0; index < s.length; index++) {
//         if (s[0] === ')' || s[0] === '}' || s[0] === ']') {
//             return false;
//         }

//         if (index == 0) {
//             tempArray.push(s[0]);
//             continue;
//         }

//         if (s[index] == '(' || s[index] == '{' || s[index] == '[') {
//             tempArray.push(s[index]);
//             continue;
//         }

//         if (s[index] === ')' || s[index] === '}' || s[index] === ']') {
//             tempArray.push(s[index]);
//         }

//         if (tempArray[tempArray.length - 1] === ')' && tempArray[tempArray.length - 2] === '(') {
//             tempArray.pop();
//             tempArray.pop();
//         } else if (tempArray[tempArray.length - 1] === ']' && tempArray[tempArray.length - 2] === '[') {
//             tempArray.pop();
//             tempArray.pop();
//         } else if (tempArray[tempArray.length - 1] === '}' && tempArray[tempArray.length - 2] === '{') {
//             tempArray.pop();
//             tempArray.pop();
//         } else {
//             return false;
//         }

//     }
//     return tempArray.length == 0 ? true : false;
// };