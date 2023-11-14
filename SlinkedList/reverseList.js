class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Method to add a new node to the end of the list
    addNode(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head
        this.head = prev;
    }

    // Method to print the elements of the list
    print() {
        let current = this.head;
        if (!current) {
            console.log('empty head');
            return;
        }
        while (current) {
            console.log(current.data);
            current = current.next;
        }
        console.log('this head',this.head);
        console.log('this tail',this.tail);

    }
}

const myList = new LinkedList();

myList.addNode(50);
myList.addNode(10);
myList.addNode(100);
myList.addNode(1);

console.log('Before sorting the list:');
myList.print();

// myList.bubbleSort();
myList.reverse()
console.log('\nAfter sorting the list:');
myList.print();
