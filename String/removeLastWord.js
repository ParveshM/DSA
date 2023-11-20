function removeLastWord(Str) {
    return Str.split(' ').slice(0, -1).join(' ')
}

const sentence = 'Hello this is Javascript';
console.log(removeLastWord(sentence));