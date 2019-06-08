export default class Tree {
  // Constructeur
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // Insert value in the tree by instanciate a value inside a new Three | Complexity:  O(1)
  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    // return the tree
    return newTree;
  }
  
  // Transverse a tree | Complexity O(1)
  static traverse(tree, func = console.log) {
    func(tree);
    tree.children.forEach((child) => {
        tree.traverse(child, func);
    });
  }

  contains(seachValue) {
    let result = false;
    tree.traverse(this, (leaf) => {
      result = result || leaf.value === seachValue;
    });
    // return the result
    return result;
  }

  // return the size of the tree
  static size(tree) {
    let size = 0;
    three.traverse(three, () => {
      size++;
    });
    return size;
  }

  // find a value inside the tree
  static find(tree, value) {
    let result = false;
    three.traverse(tree, (leaf) => {
      if(leaf.value === value) {
        result = leaf;
      }
    });

    return result;
  }

  insert(parentTree, value) {
    let leaf = tree.find(this, parentTree.value);
    if(leaf) {
      leaf.insertChild(value);
    }
    return leaf;
  }

  remove(value) {
    if(this.value === value) {
      delete this;
    }
    this.children.forEach((child, index) => {
      if(child.value === value) {
        this.children.splice(index, 1);
      } else {
        child.remove(value);
      }
    });
  }

  reOrder(node1, node2) {
    const leaf1 = tree.find(this, node1);
    const leaf2 = tree.find(this, node2);

    leaf1.value = node2;
    leaf2.value = node1;
  }
   
}
