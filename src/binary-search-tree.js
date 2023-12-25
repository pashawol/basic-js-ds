const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;

  }

  add(data) {
    this.tree = addEl(this.tree, data);

    function addEl(node, data) {
      if(!node) return new Node(data);

      if(node.data === data) return node;

      data < node.data ? node.left = addEl(node.left, data) : node.right = addEl(node.right, data);
      
      return node;
    }
  }

  has(data) {
    return searchEl(this.tree, data);

    function searchEl(node, data) {
      if(!node) return false;

      if(node.data === data) return true;
      
      return data < node.data ? searchEl(node.left, data) : searchEl(node.right, data);
    }
  }

  find(data) {
    return findEl(this.tree, data);

    function findEl(node, data) {
      if(!node) return null;

      if(node.data === data) return node;

      return data < node.data ? findEl(node.left, data) : findEl(node.right, data);
    }
  }

  remove(data) {
    this.tree = removeEl(this.tree, data);

    function removeEl(node, data) {
      if(!node) return null;

      if(data < node.data) {
        node.left = removeEl(node.left, data);
        return node;
      }
      else if (data > node.data) {
        node.right = removeEl(node.right, data)
        return node;
      }
      else{
        if(!node.left && !node.right) return null;
        
        if(!node.left) {
          node = node.right;
          return node;
        }
        
        if(!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data;
        node.right = removeEl(node.right, minRight.data)
        return node;
      }
    }
  }

  min() {
    let node = this.tree;
    while (node.left) {
      node = node.left
    }
    return node.data;
  }

  max() {
    let node = this.tree;
    while (node.right) {
      node = node.right
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};