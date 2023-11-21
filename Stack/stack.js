class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        const newNode = new Node(data);

        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top
            this.top = newNode
        }
    }

    pop() {
        if (!this.top) {
            console.log('Stack underflow');
            return;
        }
        this.top = this.top.next;
    }

    // Method to print the elements of the list
    display() {
        let current = this.top;
        if (!current) {
            console.log('empty head');
            return;
        }
        while (current) {
            console.log('node is', current);
            console.log(current.data);
            current = current.next;
        }
    }
}

const myStack = new stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop()

myStack.display()