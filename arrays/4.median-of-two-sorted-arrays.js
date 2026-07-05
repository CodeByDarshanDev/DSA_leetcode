/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let mergedArray = [...nums1, ...nums2];
    let sortedArray = mergedArray.sort((a, b) => a - b);

    if (sortedArray.length % 2 == 0) {
        // even length
        let index1 = (sortedArray.length / 2) - 1;
        let index2 = (sortedArray.length / 2);
        let medianNumber1 = sortedArray[index1];
        let medianNumber2 = sortedArray[index2];

        return (medianNumber1 + medianNumber2) / 2;
    } else if (sortedArray.length % 2 == 1) {
        //odd length
        let medianNumber = Math.floor(sortedArray.length / 2);
        return sortedArray[medianNumber];
    }
};
// @lc code=end

