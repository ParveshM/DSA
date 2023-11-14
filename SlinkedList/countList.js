class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
    }


    addNode(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return;
        }

        this.tail.next = newNode
        this.tail = newNode

    }

    print() {
        let temp = this.head
        if (!temp) {
            console.log('No head');
            return
        }
        let length = 0
        while (temp) {
            console.log('Data is: ',temp);
            temp = temp.next
            length++
        }
        console.log('Total lenth of list',length);
    }
}

const list = new linkedList();

list.print()
list.addNode(10)
list.addNode(15)
list.addNode(20)
list.print()