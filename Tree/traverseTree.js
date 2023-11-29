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
            console.log('Node is :', node.data);
            this.preOrderHelper(node.left)
            this.preOrderHelper(node.right)
        }
    }

    postOrder() {
        this.postOrderHelper(this.root)
    }

    postOrderHelper(node) {
        if (node) {
            this.postOrderHelper(node.left)
            this.postOrderHelper(node.right)
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
tree.insert(25)


console.log('\n In Place order');
tree.inOrder()
console.log('\n pre  order');
tree.preOrder()
console.log('\npost order');
tree.postOrder()
console.log('\n', tree.root);
