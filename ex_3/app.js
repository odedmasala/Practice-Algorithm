// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LickedList {
//   constructor(head = null) {
//     this.head = head;
//   }
//   size() {
//     let count = 0;
//     let node = this.head;
//     while (node) {
//       count++;
//       node = node.next;
//     }
//     return count;
//   }
//   clear() {
//     this.head = null;
//   }
//   getLast() {
//     let lastNode = this.head;
//     if (lastNode) {
//       while (lastNode.next) {
//         lastNode = lastNode.next;
//       }
//     }
//     return lastNode;
//   }
//   getFirst() {
//     return this.head;
//   }
// }

// let node1 = new ListNode(2);
// let node2 = new ListNode(5);
// let node3 = new ListNode([0,2,455,10])
// node2.next = node3
// node1.next = node2;
// let list = new LickedList(node1);
// console.log(list);
// console.log(list.size());

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    let newNode = new Node(value); //!
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  #addToTail(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  add() {
    this.#addToTail();
  }
}

const list = new LinkedList();

// list.addToHead(
//   "https://cdn.pixabay.com/photo/2020/07/30/10/26/asian-woman-5450041__480.jpg"
// );
// list.addToHead(
//   "https://cdn.pixabay.com/photo/2015/06/01/00/20/man-792821__480.jpg"
// );
// list.addToHead(
//   "https://cdn.pixabay.com/photo/2020/04/16/06/06/water-5049286__480.jpg"
// );
// list.addToTail(
//   "https://cdn.pixabay.com/photo/2020/11/20/07/45/lake-5760752__480.jpg"
// );

list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.addToTail(0);
console.log(list);
// let current = list.head;
// const nextBtn = document.getElementById("next")
// const img = document.getElementById("img");

// img.src = current.data;

// nextBtn.onclick = () => {
//     console.log("click");
//     if (current.next) {
//         current = current.next;
//     }
//     img.src = current.data;
// }

// const a = { name: ",dvnkdj", age: 90 };
// const b = a;

// b.age = 80;

// console.log(a, b);