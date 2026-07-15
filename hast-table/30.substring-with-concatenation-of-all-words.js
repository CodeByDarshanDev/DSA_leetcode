/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */


// Logic (Step by Step)

// 1. Find the length of one word.
// 2. Calculate the total length of all words combined.
// 3. Create a frequency map (wordMap) to store how many times each word should appear.
//    Example:
//    words = ["foo", "bar", "foo"]
//    wordMap = {
//        foo: 2,
//        bar: 1
//    }

// 4. Check every possible starting index in the string.
//    (Only until there is enough space for the complete substring.)

// 5. For each starting index:
//    - Create a new map (seen) to count the words found.
//    - Read the string in chunks of wordLength.
//    - Example:
//        "barfoofoo"
//        -> "bar"
//        -> "foo"
//        -> "foo"

// 6. For every extracted word:
//    - If the word is not in wordMap, stop checking this starting index.
//    - Otherwise, add it to seen.
//    - If the count of a word becomes greater than required,
//      stop checking because this starting index cannot be valid.

// 7. If we successfully read all the words without breaking,
//    it means every required word appeared exactly the correct number of times.
//    Add the starting index to the answer.

// Key Idea:
// - We do NOT generate all permutations.
// - The order of words does not matter.
// - We only check whether every required word appears the correct number of times.

// Time Complexity:
// O(s.length × words.length)

// Space Complexity:
// O(number of unique words)




var findSubstring = function (s, words) {

    let wordLength = words[0].length;
    let totalLength = wordLength * words.length;

    let indexArray = [];

    // Create word frequency map
    let wordMap = {};

    for (const word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }


    // Check every possible starting index
    for (let i1 = 0; i1 <= s.length - totalLength; i1++) {

        let seen = {};
        let count = 0;

        for (let j = i1; j < i1 + totalLength; j += wordLength) {

            let sliceWord = s.slice(j, j + wordLength);

            // Word does not exist in words array
            if (!wordMap[sliceWord]) {
                break;
            }

            seen[sliceWord] = (seen[sliceWord] || 0) + 1;

            // Same word appears too many times
            if (seen[sliceWord] > wordMap[sliceWord]) {
                break;
            }

            count++;
        }


        // All words matched
        if (count === words.length) {
            indexArray.push(i1);
        }
    }

    return indexArray;
};
// @lc code=end

