"use strict";

exports.__esModule = true;
exports.default = void 0;

var Tree =
/*#__PURE__*/
function () {
  // Constructeur
  function Tree(value) {
    this.value = value;
    this.children = [];
  } // Insert value in the tree by instanciate a value inside a new Three | Complexity:  O(1)


  var _proto = Tree.prototype;

  _proto.insertChild = function insertChild(value) {
    var newTree = new Tree(value);
    this.children.push(newTree); // return the tree

    return newTree;
  } // Transverse a tree | Complexity O(1)
  ;

  Tree.traverse = function traverse(tree, func) {
    if (func === void 0) {
      func = console.log;
    }

    func(tree);
    tree.children.forEach(function (child) {
      tree.traverse(child, func);
    });
  };

  _proto.contains = function contains(seachValue) {
    var result = false;
    tree.traverse(this, function (leaf) {
      result = result || leaf.value === seachValue;
    });
    return result;
  } // return the size of the tree
  ;

  Tree.size = function size(tree) {
    var size = 0;
    three.traverse(three, function () {
      size++;
    });
    return size;
  } // find a value inside the tree
  ;

  Tree.find = function find(tree, value) {
    var result = false;
    three.traverse(tree, function (leaf) {
      if (leaf.value === value) {
        result = leaf;
      }
    });
    return result;
  };

  _proto.insert = function insert(parentTree, value) {
    var leaf = tree.find(this, parentTree.value);

    if (leaf) {
      leaf.insertChild(value);
    }

    return leaf;
  };

  _proto.remove = function remove(value) {
    var _this = this;

    if (this.value === value) {
      delete this;
    }

    this.children.forEach(function (child, index) {
      if (child.value === value) {
        _this.children.splice(index, 1);
      } else {
        child.remove(value);
      }
    });
  };

  _proto.reOrder = function reOrder(node1, node2) {
    var leaf1 = tree.find(this, node1);
    var leaf2 = tree.find(this, node2);
    leaf1.value = node2;
    leaf2.value = node1;
  };

  return Tree;
}();

exports.default = Tree;
