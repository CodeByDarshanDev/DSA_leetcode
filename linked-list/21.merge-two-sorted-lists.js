/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 == null && list2 == null) {
        return null;
    }
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    let array = [];

    let counterL1 = 1;
    let currentL1 = list1;
    while (currentL1 != null) {
        array.push(currentL1.val);
        currentL1 = currentL1.next;
        counterL1++
    }

    let counterL2 = 1;
    let currentL2 = list2;
    while (currentL2 != null) {
        array.push(currentL2.val);
        currentL2 = currentL2.next;
        counterL2++
    }

    array.sort((a, b) => a - b);

    class newNode {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }

    let head = new newNode(array[0]);
    let currNode = head;
    for (let index = 1; index < array.length; index++) {
        currNode.next = new newNode(array[index])
        currNode = currNode.next
    }

    return head;
};
// @lc code=end

