/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
var reverseKGroup = function (head, k) {
    if (head == null) return null;
    if (head.next == null) return head;

    let array = [];
    let current = head;

    while (current != null) {
        array.push(current.val);
        current = current.next;
    }

    let finalArray = [];
    for (let index = 0; index < array.length; index += k) {
        if (index + k <= array.length) {
            finalArray.push(...array.slice(index, index + k).reverse());
        } else {
            finalArray.push(...array.slice(index));
        }
    }

    class newNode {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
    let finalList = new newNode(finalArray[0]);
    let curNode = finalList;
    for (let index = 1; index < finalArray.length; index++) {
        curNode.next = new newNode(finalArray[index]);
        curNode = curNode.next;
    }
    return finalList;
};
// @lc code=end

