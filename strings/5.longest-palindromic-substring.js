/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} 
 * @return {string}
 */

// Method 1 my own method but not memory efficient

// function checkIsPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }
// var longestPalindrome = function (s) {

//     let substringArray = [];
//     for (let string = 0; string < s.length; string++) {
//         let tempString = "";
//         for (let index = string; index < s.length; index++) {
//             tempString += s[index];
//             if (checkIsPalindrome(tempString)) {
//                 substringArray.push(tempString);
//             }
//         }
//     }

//     return substringArray.reduce((max, currentValue) => {
//         return currentValue.length > max.length ? currentValue : max;
//     })
// };



// methode 2 Memory efficient method
var longestPalindrome = function (s) {

    let startIndex = 0;
    let maxLength = 0;

    // expand function from center
    function expandFromCenter(left, right) {

        // expand while characters match
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        // return final valid palindrome range
        return [left + 1, right - 1];
    }

    for (let center = 0; center < s.length; center++) {

        // CASE 1: odd length palindrome (single center)
        let [left1, right1] = expandFromCenter(center, center);

        // CASE 2: even length palindrome (between two chars)
        let [left2, right2] = expandFromCenter(center, center + 1);

        // update longest (odd case)
        if (right1 - left1 > maxLength) {
            startIndex = left1;
            maxLength = right1 - left1;
        }

        // update longest (even case)
        if (right2 - left2 > maxLength) {
            startIndex = left2;
            maxLength = right2 - left2;
        }
    }

    // return final longest palindrome
    return s.substring(startIndex, startIndex + maxLength + 1);
};


// @lc code=end

