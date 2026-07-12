/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length == 0) {
        return null;
    }

    let array = [];

    for (const element of lists) {
        if (element == null) continue;

        let currentNode = element;
        while (currentNode != null) {
            array.push(currentNode.val);
            currentNode = currentNode.next;
        }
    }

    array.sort((a, b) => a - b);

    class nodeList {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
    if (array.length == 0) return null;
    let finalList = new nodeList(array[0]);
    let current = finalList;
    let count = 1;
    while (count < array.length) {
        current.next = new nodeList(array[count]);
        current = current.next;
        count++;
    }

    return finalList;
};
// @lc code=end

