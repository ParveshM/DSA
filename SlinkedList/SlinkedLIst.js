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
        // console.log('this head', this.head, 'this tail', this.tail);
    }

    // Method to print the elements of the list
    print() {
        let current = this.head;
        if (!current) {
            console.log('empty head');
            return;
        }
        while (current) {
            // console.log('node is', current);
            console.log(current.data);
            current = current.next;
        }
    }
}


const myList = new LinkedList();

myList.print();

myList.addNode(50);
myList.addNode(10);
myList.addNode(100);
myList.addNode(1);
console.log('Before sorting the list',myList);
// myList.print();
myList.bubbleSort()
console.log('after sorting the list',myList);

myList.print();
