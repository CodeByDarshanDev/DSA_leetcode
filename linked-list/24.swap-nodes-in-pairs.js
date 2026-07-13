/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @return {ListNode}
 */

// # hard problem
var swapPairs = function (head) {
    if (head == null) {
        return null;
    }

    class newNode {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }

    let finalList = null;
    let tail = null;
    let current = head;


    while (current !== null) {
        // If there is only one node left
        if (current.next === null) {
            let node = new newNode(current.val);

            if (finalList === null) {
                finalList = node;
            } else {
                tail.next = node;
            }

            tail = node;
            break;
        }

        // Create swapped pair
        let first = new newNode(current.next.val);
        let second = new newNode(current.val);

        first.next = second;

        if (finalList === null) {
            finalList = first;
        } else {
            tail.next = first;
        }

        tail = second;
        current = current.next.next;
    }

    return finalList;
};
// @lc code=end
