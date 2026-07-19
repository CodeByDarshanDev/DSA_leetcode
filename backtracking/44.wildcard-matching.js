/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

    let stringIndex = 0;
    let pIndex = 0;

    // Stores the position of the last '*' in the p
    let lastStarIndex = -1;

    // Stores the s position where we started matching after '*'
    let sMatchAfterStar = -1;

    while (stringIndex < s.length) {

        // Current characters match or p has '?'
        if (
            pIndex < p.length &&
            (p[pIndex] === s[stringIndex] ||
                p[pIndex] === '?')
        ) {
            stringIndex++;
            pIndex++;
        }

        // Current p character is '*'
        else if (
            pIndex < p.length &&
            p[pIndex] === '*'
        ) {
            lastStarIndex = pIndex;
            sMatchAfterStar = stringIndex;
            pIndex++;
        }

        // Characters don't match, but we have seen a '*'
        else if (lastStarIndex !== -1) {

            // Go back to the character after '*'
            pIndex = lastStarIndex + 1;

            // Let '*' match one more character
            sMatchAfterStar++;
            stringIndex = sMatchAfterStar;
        }

        // No match and no '*' to backtrack to
        else {
            return false;
        }
    }

    // Skip remaining '*' characters in the p
    while (
        pIndex < p.length &&
        p[pIndex] === '*'
    ) {
        pIndex++;
    }

    // p should also be completely matched
    return pIndex === p.length;

};
// @lc code=end