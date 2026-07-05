/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function listToNumber(node) {
    let arr = [];
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    return BigInt(arr.reverse().join(''));
}

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function numberToList(num) {
    const digits = String(num).split('');

    let head = null;

    for (const digit of digits) {
        head = new ListNode(Number(digit), head);
    }

    return head;
}

var addTwoNumbers = function (l1, l2) {

    let numL1 = listToNumber(l1)
    let numL2 = listToNumber(l2)

    const sum = numL1 + numL2;

    return numberToList(sum);
};
// @lc code=end

