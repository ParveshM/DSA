class TrieNode {
    constructor() {
        this.children = {}
        this.isWordEnd = false
    }
}

class SuffixTrie {
    constructor() {
        this.root = new TrieNode()
    }

    populateSuffxTrie(str) {
        for (let i = 0; i < str.length; i++) {
            this.insert_SubStr_StartingAt(i, str)
        }
    }

    insert_SubStr_StartingAt(indx, str) {
        let node = this.root;
        for (let i = indx; i < str.length; i++) {
            let letter = str[i];

            if (!node.children[letter]) {
                node.children[letter] = new TrieNode()
            }
            node = node.children[letter];
        }
        node.isWordEnd = true;
    }

    contains(str) {
        let node = this.root;
        for (let i = 0; i < str.length; i++) {
            let letter = str[i]
            if (!node.children[letter]) return false;
            node = node.children[letter];
        }
        return node.isWordEnd;
    }

    // Existing code...
    remove(word) {
        this.recursiveRemove(this.root, word, 0);
    }

    recursiveRemove(node, word, index) {
        if (index === word.length) {
            if (!node.isWordEnd) {
                // If the entire word isn't present, nothing to remove
                return false;
            }
            node.isWordEnd = false; // Mark the last node as not representing the end of a word
            return Object.keys(node.children).length === 0; // Check if there are no other children left
        }

        const char = word[index];
        if (!(char in node.children)) {
            // If character not found, word doesn't exist in the trie
            return false;
        }

        const shouldDelete = this.recursiveRemove(node.children[char], word, index + 1);

        if (shouldDelete) {
            // If the child node signals to delete, remove the reference and check for deletion conditions
            delete node.children[char];
            return Object.keys(node.children).length === 0;
        }

        return false;
    }


}
1
const trie = new SuffixTrie();
trie.populateSuffxTrie('mannan')
console.log('is this contains', trie.contains('mannan'));
trie.remove('mannan')
console.log('is this contains after remove', trie.contains('mannan'));
console.log('is this contains after annan', trie.contains('annan'));

console.log('\nSuffix tree is', trie.root);

