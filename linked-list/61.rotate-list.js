/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head == null || head.next == null) {
        return head;
    }
    let n = 0;
    let curr = head;
    let tail = null;
    // here i want to find length of head list 
    while (curr != null) {
        tail = curr;
        curr = curr.next;
        n++;
    }

    // Now compute modulo to reduce unnecessary rotation
    k = k % n;
    if (k == 0) return head;

    // make circular linkedlist
    tail.next = head;
    let newTailNode = (n - k - 1);
    let newCurr = head;
    // iterate untill the nth Node
    for (let index = 0; index < newTailNode; index++) {
        newCurr = newCurr.next;
    }
    // after the nth node store all value to new variable and then break the circular linked list
    let newHead = newCurr.next;
    newCurr.next = null;
    return newHead;
};
// @lc code=end