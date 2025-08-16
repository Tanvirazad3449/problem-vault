// Write a function isPrimeNumber(num) that takes a 
// number as input and returns 'prime' if it is prime, otherwise 'not prime'.

// __________________________ APPROACH 1 __________________________
// function f(n){
//     console.time("primeCheck");
//     for (let i = 2; i < n; i++) {
//         if(n % i === 0){
//             return "not prime"
//         }
//     }
//     console.timeEnd('primeCheck')
//     return "prime"
// }
// needs 18 seconds

// __________________________ APPROACH 2 __________________________
// Only check up to √n → because if n has a factor larger 
// than its square root, the other factor must be smaller.

function f(n){
    console.time("primeCheck");
    for (let i = 2; i < Math.sqrt(n); i++) {
        if(n % i === 0){
            return "not prime"
        }
    }
    console.timeEnd('primeCheck')
    return "prime"
}
console.log(f(4000000007)) 
// needs 5ms for optimized approach