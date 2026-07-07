/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let largestContainerValue = 0;

    for (let startElement = 0; startElement < height.length - 1; startElement++) {

        if (height[startElement] * ((height.length - 1) - startElement) <= largestContainerValue) {
            continue;
        }

        for (let innerLoopElement = startElement + 1; innerLoopElement < height.length; innerLoopElement++) {

            let areaOfLines = (Math.min(height[startElement], height[innerLoopElement])) * (innerLoopElement - startElement);

            largestContainerValue = Math.max(largestContainerValue, areaOfLines);

        }

    }

    return largestContainerValue;
};

// @lc code=end

