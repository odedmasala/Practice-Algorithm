// class Node {
//   constructor(value, children) {
//     this.value = value;
//     this.children = children || [];
//   }
// }
// class Tree {
//   constructor(rootNode) {
//     this.root = rootNode;
//   }
//   addNode(node, parentNode) {
//     if (!parentNode.children.includes(node)) parentNode.children.push(node);
//   };

//   BFS() {
//     let visited = [],
//         queue = [],
//         current = this.root;

//     queue.push(current);
//     while (queue.length) {
//       current = queue.shift();
//       visited.push(current.val);

//       if (current.left) queue.push(current.left);
//       if (current.right) queue.push(current.right);
//     };

//       return visited;
//   }

//   dfs () {
//     // log all the values of the tree
//     // uses stack
//   };

//   search (funcType, value) {
//     // search the value in the tree if not exist return false
//     if (funcType === "dfs") return dfs(value);
//     return bfs(value);
//   };
// }

function Node(value, children) {
  this.value = value;
  this.children = children || [];
}
function Tree(rootNode) {
  this.root = rootNode;
  const addNode = (node, parentNode) => {
    if (!parentNode.children.includes(node)) parentNode.children.push(node);
  };
  const bfs = (value) => {
    let queue = [this.root];
    while (queue.length > 0) {
      let nodeCheck = queue.shift();
      if (nodeCheck.value == value) return nodeCheck;
      if (nodeCheck.children.length > 0) {
        queue.push(...nodeCheck.children);
      }
      console.log(queue);
    }
  };
  const dfs = (value) => {
    // log all the values of the tree
    // uses stack
    let stack = [this.root];
    while (stack.length > 0) {
      let nodeCheck = stack.pop();
      if (nodeCheck.value == value) return nodeCheck.value;
      for (let i = nodeCheck.children.length - 1; i >= 0; i--) {
        stack.push(nodeCheck.children[i]);
      }
    }
  };
  const search = (funcType, value) => {
    // search the value in the tree if not exist return false
    if (funcType === "dfs") return dfs(value);
    return bfs(value);
  };
  return {
    root,
    addNode,
    bfs,
    dfs,
    search,
  };
}
const root = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const tree = new Tree(root);
tree.addNode(node1, root);
tree.addNode(node2, root);
tree.addNode(node3, node1);
tree.addNode(node4, node2);
tree.addNode(node5, node1);
tree.addNode(node6, node2);
tree.dfs(6);
