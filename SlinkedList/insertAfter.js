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

    // insert After a node
    insertAfter(nextTo,data) {
        const newNode = new Node(data)
        let temp = this.head
        let tail = this.tail

        while (temp !== null && temp.data !== nextTo) {
            temp = temp.next
        }

        if (temp === null) {
            console.log('No Node found');
            return;
        }

        if (temp == tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = temp.next
        temp.next = newNode

    }
    print(){
        let temp = this.head;
        if(!temp){
            console.log('No Head availale');
            return;
        }
        while (temp) {
            console.log('temp is ',temp.data);
            temp = temp.next
            
        }
    }
}

const myList = new LinkedList()
myList.addNode(1)
myList.addNode(2)
myList.addNode(3)
myList.insertAfter(2,10)
myList.print()
console.log('Linked list', myList);