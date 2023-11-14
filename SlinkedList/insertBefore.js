class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    // Adding a new node into the list 
    addNode(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return;
        }

        this.tail.next = newNode
        this.tail = newNode
    }

    // insert before a node
    insertBefore(before, data) {
        const newNode = new Node(data)
        let temp = this.head
        let prev = null;

        if (temp.data === before) {
            newNode.next = temp
            this.head = newNode;
            return;
        }

        while (temp !== null && temp.data !== before) {
            prev = temp
            temp = temp.next
        }

        if (temp === null) {
            console.log('No Node found');
            return;
        }

        prev.next = newNode;
        newNode.next = temp

    }
    print() {
        let temp = this.head;
        if (!temp) {
            console.log('No Head availale');
            return;
        }
        while (temp) {
            console.log('temp is: ', temp.data);
            temp = temp.next

        }
    }
}

const myList = new LinkedList()
myList.addNode(1)
myList.addNode(2)
myList.addNode(3)
myList.insertBefore(2, 10)
myList.print()
console.log('Linked list', myList);