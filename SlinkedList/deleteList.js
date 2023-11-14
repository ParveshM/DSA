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
    // delete a Node 
    // Delete all occurrences of the specified data
    deleteAllTargetElement(data) {
        let temp = this.head;
        let tail = this.tail;
        let prev = null;

        while (temp !== null) {
            if (temp.data === data) {
                if (prev === null) {
                    this.head = temp.next;
                } else {
                    prev.next = temp.next;
                }

                if (temp === tail) {
                    this.tail = prev;
                    this.tail.next = null;
                    return;
                }

                temp = temp.next;
            } else {
                prev = temp;
                temp = temp.next;
            }
        }
    }

    print() {
        let temp = this.head;
        if (!temp) {
            console.log('empty head');
            return;
        }
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

const myList = new LinkedList();


myList.addNode(1);
myList.addNode(3);
myList.addNode(2);
myList.addNode(6);
myList.addNode(3);

myList.deleteAllTargetElement(3);


myList.print();
// console.log('Linked list', myList);
