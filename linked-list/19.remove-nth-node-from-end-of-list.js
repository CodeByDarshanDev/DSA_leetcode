/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
function getLength(head) {
    let length = 0;
    let currrent = head;

    while (currrent !== null) {
        length++;
        currrent = currrent.next
    }
    return length;
}

var removeNthFromEnd = function (head, n) {
    let counter = 1;
    let lengthOfList = getLength(head);
    let leadNode = head;

    if (lengthOfList == n) {
        return head.next;
    }

    while (counter < lengthOfList - n) {
        leadNode = leadNode.next;
        counter++;
    }
    let nextNode = leadNode.next.next;
    leadNode.next = nextNode;

    return head;
};
// @lc code=end

