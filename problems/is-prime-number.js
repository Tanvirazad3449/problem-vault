
// __________________________ APPROACH __________________________
// Only check up to √n → because if n has a factor larger 
// than its square root, the other factor must be smaller.

import test from "../test.mjs"

function f(n){
    if(n < 2) return false
    for(let i = 2; i < Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

test([
    { input: [1], expected: false },
    { input: [2], expected: true },
    { input: [151], expected: true },
    { input: [152], expected: false },
    { input: [4000000007], expected: true },
], f)