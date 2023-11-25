class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(data) {
        if (!this.root) {
            this.root = new Node(data);
            return
        }
        let currentNode = this.root;
        while (true) {
            if (data < currentNode.data) {
                if (currentNode.left === null) {
                    currentNode.left = new Node(data)
                    break;
                } else {
                    currentNode = currentNode.left
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = new Node(data)
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    contains(data) {
        let currentNode = this.root;

        while (currentNode) {
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            }
            else if (data > currentNode.data) {
                currentNode = currentNode.right;
            } else {
                return true
            }
        }
        return false
    }

    remove(data) {
        this.removeHelper(data, this.root, null);
    }

    removeHelper(data, currentNode, parentNode) {

        while (currentNode) {
            if (data < currentNode.data) {
                // Moves to the left subtree
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
                // Moves to the right subtree
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                // Node to be removed is found

                if (currentNode.left && currentNode.right) {
                    // Node has two children
                    // Replace the node's data with the minimum value from the right subtree
                    currentNode.data = this.getMinValue(currentNode.right)
                    // Recursively remove the node with the minimum value from the right subtree
                    this.removeHelper(currentNode.data, currentNode.right, currentNode)
                } else {
                    // Node has at most one child

                    if (parentNode === null) {
                        // Node to be removed is the root
                        if (currentNode.right === null) {
                            this.root = currentNode.left
                        } else {
                            this.root = currentNode.right
                        }
                    } else {
                        // Node to be removed is not the root

                        if (parentNode.left === currentNode) {
                            // Node is a left child of its parent
                            if (currentNode.right === null) {
                                parentNode.left = currentNode.left
                            } else {
                                parentNode.left = currentNode.right
                            }
                        } else {
                            // Node is a right child of its parent
                            if (currentNode.right === null) {
                                parentNode.right = currentNode.left
                            } else {
                                parentNode.right = currentNode.right
                            }
                        }
                    }
                }
                break;
            }
        }
    }


    getMinValue(currentNode) {
        if (currentNode.left === null) {
            return currentNode.data
        } else {
            return this.getMinValue(currentNode.left)
        }
    }

    inOrder() {
        this.inOrderHelper(this.root)
    }

    inOrderHelper(node) {
        if (node) {
            this.inOrderHelper(node.left)
            console.log('Nodes are', node.data);
            this.inOrderHelper(node.right)
        }
    }

    preOrder() {
        this.preOrderHelper(this.root)
    }

    preOrderHelper(node) {
        if (node) {
            console.log('Nodes are', node.data);
            this.inOrderHelper(node.left)
            this.inOrderHelper(node.right)
        }
    }

    postOrder() {
        this.postOrderHelper(this.root)
    }

    postOrderHelper(node) {
        if (node) {
            this.inOrderHelper(node.left)
            this.inOrderHelper(node.right)
            console.log('Nodes are', node.data);
        }
    }

}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(15)
tree.insert(12)
tree.insert(20)
console.log('\n In Place order');
tree.inOrder()
console.log('\n pre  order');
tree.preOrder()
console.log('\npost order');
tree.postOrder()
// console.log('Is value contains in the tree ?', tree.contains(10));
// tree.remove(10)
// console.log('Is value contains in the tree ?', tree.contains(10));
// console.log('\n', tree.root);
