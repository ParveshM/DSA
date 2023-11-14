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

    insertStart(data){
        const newNode =  new Node(data)

        let temp = this.head

        if(!temp){
           this.addNode(data)
        }

        if(temp){
            newNode.next = temp
            this.head =  newNode
            return;
        }
        
    }

    print() {
        let temp = this.head
        if (!temp) {
            console.log('No head');
            return
        }
        while (temp) {
            console.log('Data is: ',temp);
            temp = temp.next
        }
        console.log('head',this.head);
        console.log('tail',this.tail);
    }
}

const list = new linkedList();

list.print()
list.addNode(10)
list.addNode(15)
list.addNode(20)

list.insertStart(200)

list.print()