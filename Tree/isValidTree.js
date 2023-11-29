class Node {
    constructor(data) {
        this.data = data
        this.left = this.right = null

    }
}

class isBinarayTree {
    constructor() {
        this.root = null
    }

    // Insert a node into a tree
    insert(data) {
        if (!this.root) {
            this.root = new Node(data)
            return;
        }

        let current = this.root

        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = new Node(data)
                    break;
                } else {
                    current = current.left;
                }
            } else if (data > current.data) {
                if (current.right === null) {
                    current.right = new Node(data)
                    break;
                } else {
                    current = current.right;
                }

            } else {
                return
            }
        }
    }

    // checking is it a binary tree
    isValidBST() {
        const root = this.root
        let prev = null;

        function inorder(node) {
            if (!node) return true;

            if (!inorder(node.left)) return false;

            if (prev !== null && node.val <= prev) return false;
            prev = node.val;

            return inorder(node.right);
        };

        return inorder(root);
    }
}

const tree = new isBinarayTree()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(12)
tree.insert(7)
tree.insert(7)

console.log(tree.isValidBST());
// console.log(tree.root);