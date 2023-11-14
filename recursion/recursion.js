// function abc(n) {
//     if (n <= 1) {
//         return 1
//     }
//     return n * abc(n - 1)
// }

// const result = abc(5)
// console.log('result', result);

var fib = function (n) {
    if (n <= 1 ) { 
        return n
    } 
    return fib(n - 1) + fib(n - 2)
};

const result = fib()
console.log(result);