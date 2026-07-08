/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// This code is working on small length of array but not optimized for long arrays

// var threeSum = function (nums) {
//     nums.sort((a, b) => a - b);
//     let tripletArray = [];
//     if (nums.length < 3) {
//         return [];
//     }

//     for (let index1 = 0; index1 < nums.length - 2; index1++) {


//         for (let index2 = index1 + 1; index2 < nums.length - 1; index2++) {


//             for (let index3 = index2 + 1; index3 < nums.length; index3++) {


//                 if (nums[index1] + nums[index2] + nums[index3] == 0) {

//                     let tempArray = ([nums[index1], nums[index2], nums[index3]]);

//                     if (tripletArray.length == 0) {
//                         tripletArray.push(tempArray);
//                     } else {

//                         const isSameArray = tripletArray.some(arr =>
//                             arr.every((value, index) => value === tempArray[index])
//                         );

//                         if (!isSameArray) {
//                             tripletArray.push(tempArray);
//                         }
//                     }
//                 }

//             }

//         }

//     }

//     return tripletArray;
// };


var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let tripletArray = [];

    for (let index1 = 0; index1 < nums.length - 2; index1++) {
        if (index1 > 0 && nums[index1] === nums[index1 - 1]) continue;
        let left = index1 + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[index1] + nums[left] + nums[right];
            let tempArray = [nums[index1], nums[left], nums[right]];

            if (sum === 0) {
                tripletArray.push(tempArray);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }

    }

    return tripletArray;
};

// @lc code=end

