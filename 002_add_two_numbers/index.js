/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let flag = 0, p1=l1, p2=l2, result = new ListNode(0);
  let p3 = result;
  do{
    let num1 = p1 ? p1.val : 0;
    let num2 = p2 ? p2.val : 0;
    let tmp = num1 + num2 + flag;
    
    flag = tmp >= 10 ? 1 : 0;
    p3.next = new ListNode(tmp%10);
    p3 = p3.next;
    p1 = p1 ? p1.next : null;
    p2 = p2 ? p2.next : null;
  }while(p1 || p2 || flag === 1)

  return result.next;
};