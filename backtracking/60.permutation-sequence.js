/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let curString = Array.from({ length: n }, (_, i) => i + 1);
    if (k == 1) return curString.join('');
    let counter = 1;

    function nextPermuteString(str) {
        let pivot = -1;
        for (let i = str.length - 2; i >= 0; i--) {
            if (str[i] < str[i + 1]) {
                pivot = i;
                break;
            }
        }

        let successor = -1;
        for (let j = str.length - 1; j > pivot; j--) {
            if (str[j] > str[pivot]) {
                successor = j;
                break;
            }
        }

        [str[pivot], str[successor]] = [str[successor], str[pivot]];

        let revStr = str.slice(pivot + 1).reverse();
        str.splice(pivot + 1, revStr.length, ...revStr);

        curString = str;
        counter++;
    }

    do {
        nextPermuteString(curString);
    } while (counter != k);

    return curString.join('');
};
// @lc code=end

