class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LickedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  clear() {
    this.head = null;
  }
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  getFirst() {
    return this.head;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode([0,2,455,10])
node2.next = node3
node1.next = node2;
let list = new LickedList(node1);
console.log(list);
console.log(list.size());