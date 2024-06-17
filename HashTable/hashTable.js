class HashTable {
    constructor(size) {
        this.array = new Array(size);
    }

    simpleHash(key) {
        let total = 0;
        for (let char of key) {
            const value = char.charCodeAt();
            total = (total + value) % this.array.length;
        }
        return total;
    }

    set(key, value) {
        const index = this.simpleHash(key);
        if (!this.array[index]) {
            this.array[index] = [[key, value]];
        } else {
            for (const item of this.array[index]) {
                if (item[0] === key) {
                    item[1] = value;
                    return;
                }
            }
            this.array[index].push([key, value])
        }
    }

    get(key) {
        const index = this.simpleHash(key);
        for (const item of this.array[index]) {
            if (item[0] === key) {
                return [item[0],item[1]]
            }
        }
        return undefined;
    }
}

// Create a hash table instance
const fruitsTable = new HashTable(5);

// Add some fruits and their quantities
fruitsTable.set('apple', 10);
fruitsTable.set('grape', 101);
fruitsTable.set('banana', 20);
fruitsTable.set('orange', 15);


// Retrieve quantities based on keys
console.log(fruitsTable.get('apple'));
console.log(fruitsTable.get('grape'));
console.log(fruitsTable.get('banana'));
console.log(fruitsTable.get('orange'));
