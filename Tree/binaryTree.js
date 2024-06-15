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


    delete(value) {
        this.root = this._deleteHelper(this.root, value);
    }

    _deleteHelper(curr, value) {
        if (!curr) return;

        if (value < curr.data) {
            curr.left = this._deleteHelper(curr.left, value);
        } else if (value > curr.data) {
            curr.right = this._deleteHelper(curr.right, value);
        } else {
            if (!curr.left) return curr.right;
            if (!curr.right) return curr.left;
            let minNode = this.getMinNode(curr.right);
            curr.data = minNode.data;

            curr.right = this._deleteHelper(curr.right, minNode.data);
        }
        return curr;
    }
}


getMinValue(currentNode) {
    if (currentNode.left === null) {
        return currentNode.data
    } else {
        return this.getMinValue(currentNode.left)
    }
}

findClosest(target) {
    let current = this.root;
    let closest = current.data;

    while (current) {
        if (Math.abs(target - closest) > Math.abs(target - current.data)) {
            closest = current.data;
        }

        if (target < current.data) {
            current = current.left;
        } else if (target > current.data) {
            current = current.right;
        } else {
            break;
        }
    }

    return closest;
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
// console.log(tree.findClosest(2));
// console.log('Is value contains in the tree ?', tree.contains(10));
tree.remove(10)
