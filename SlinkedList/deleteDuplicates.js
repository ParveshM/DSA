class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    // Time complexity O(n²)
    removeDuplicates() {
        let curr = this.head;

        while (curr !== null) {
            let nextNode = curr.next;
            let prev = curr;

            while (nextNode !== null) {
                if (nextNode.data === curr.data) {
                    prev.next = nextNode.next;
                    if (nextNode === this.tail) {
                        this.tail = prev;
                        this.tail.next = null;
                    }
                } else {
                    prev = nextNode;
                }

                nextNode = nextNode.next;
            }
            curr = curr.next;
        }
    }

    // TimeComplexity O(n) , after sorted removing dulpicates
    deleteDuplicates() {
        let curr = this.head

        while (curr !== null) {
            let next = curr.next;
            while (next !== null && next.data === curr.data) {
                next = next.next;
            }
            curr.next = next

            if (next === this.tail && next.data === curr.data) {
                this.tail = curr;
                this.tail.next = null;
            }

            curr = next
        }
    }

    print() {
        let temp = this.head

        if (!temp) {
            console.log('empy head');
        }

        while (temp) {
            console.log('Node data: ', temp.data);
            temp = temp.next;
        }
    }
}

const list = new linkedList()
list.addNode(1)
list.addNode(1)
list.addNode(3)
list.addNode(3)
list.addNode(3)
list.addNode(6)
list.addNode(6)


console.log('\nBefore removing');
list.print()
// list.removeDuplicates()
list.deleteDuplicates()
console.log('\nAfter removing');
list.print()