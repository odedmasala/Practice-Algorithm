function Node(value, children) {
    this.value = value;
    this.children = children || [];
  }
  
  function Tree(rootNode) {
    this.root = rootNode;
    const addNode = (node, parentNode) => {
      if (!parentNode.children.includes(node)) parentNode.children.push(node);
    };
    
    const bfs = () => {
      // log all the values of the tree
      //  uses queue
    };
  
    const dfs = () => {
      // log all the values of the tree
      // uses stack
    };
  
    const search = (funcType, value) => {
      // search the value in the tree if not exist return false
      if (funcType === "dfs") return dfs(value);
      return bfs(value);
    };
  
    return {
      root,
      addNode,
      search,
    };
  }
  const root = new Node(1);
  const node1 = new Node(2);
  const node2 = new Node(3);
  const node3 = new Node(4);
  const node4 = new Node(5);
  
  const tree = new Tree(root);
  tree.addNode(node1, root);
  tree.addNode(node2, root);
  tree.addNode(node3, node1);
  tree.addNode(node4, node2);
  console.log(tree.root);