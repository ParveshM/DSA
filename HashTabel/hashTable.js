// Create a simple hash function that converts strings into numeric indexes
function simpleHash(key, arrayLength) {
    let total = 0;
    for (let char of key) {
        // Map each character to a numeric value and add it to the total
        const value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLength;
    }
    return total;
}

class HashTable {
    constructor(size = 5) {
        this.array = new Array(size);
    }

    // Store a key-value pair in the hash table
    set(key, value) {
        const index = simpleHash(key, this.array.length);
        console.log('index val',index);
        if (!this.array[index]) {
            this.array[index] = [];
        }
        this.array[index].push([key, value]);
    }

    // Retrieve a value based on the key
    get(key) {
        const index = simpleHash(key, this.array.length);
        if (this.array[index]) {
            for (let i = 0; i < this.array[index].length; i++) {
                if (this.array[index][i][0] === key) {
                    return this.array[index][i][1];
                }
            }
        }
        return undefined;
    }
}

// Create a hash table instance
const fruitsTable = new HashTable();

// Add some fruits and their quantities
fruitsTable.set('apple', 10);
fruitsTable.set('banana', 20);
fruitsTable.set('orange', 15);

// Retrieve quantities based on keys
console.log(fruitsTable.get('apple')); 
console.log(fruitsTable.get('banana')); 
console.log(fruitsTable.get('orange'));
