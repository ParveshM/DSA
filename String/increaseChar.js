function increaseCharacters(str, increaseAmount) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            charCode = (charCode - 97 + increaseAmount) % 26 + 97
            console.log('charcode', charCode);
        }
        result += String.fromCharCode(charCode);
    }
    return result;
}


console.log('final char after converting :- ', increaseCharacters('abc', 500))


function countChar(str) {
    let result = '';

    for (i = 0; i < str.length; i++) {
        count = 1;
        for (j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i != j) {
                if (i > j) {
                    count--;
                    break;
                }
                else {
                    count++;
                }
            }
        }
        if (count > 0) {
            result += str[i] + count
        }
    }
    console.log('Result is : ', result);
}
// countChar('Abbccaddddddddddddddddd')

