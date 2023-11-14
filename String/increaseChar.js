function increaseCharacters(input, increaseAmount) {
    let result = "";

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);

        // Ensure that the character is an alphabet
        if (charCode >= 97 && charCode <= 122 || charCode >= 65 && charCode <= 90) {
            charCode = (charCode - 97 + increaseAmount) % 26 + 97;
        }
        result += String.fromCharCode(charCode);
    }
    return result;
}

const inputString = "abc";
const increaseAmount = 24;
// const outputString = increaseCharacters(inputString, increaseAmount);
// console.log(outputString);
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
    console.log(result);
}
countChar('abbccaddddddddddddddddd')

// function countCharFrequency(str) {
//     let charFrequency = {};
//     result = ''

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         // Check if the character is already in the frequency object
//         if (charFrequency[char]) {
//             charFrequency[char]++;
//         } else {
//             charFrequency[char] = 1;
//         }
//     }
//     // Print the frequencies
//     for (let char in charFrequency) {
//         result += (charFrequency[char] + char);
//     }
// console.log(result);
// }


// countCharFrequency('abcca');
