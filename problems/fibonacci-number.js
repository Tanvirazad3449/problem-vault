// https://leetcode.com/problems/fibonacci-number/

import test from "../test.mjs";

// __________________________ APPROACH 1 __________________________
// 45th n takes 9s
// function f(n){
//     if(n === 1 || n === 0) return n
//     return f(n-1) + f(n-2)
// }

// __________________________ APPROACH 2 __________________________
// memoized approach, 45th takes 0.07ms
function f(n) {
    let seen = {}
    function fib(num) {
        if (num === 1 || num === 0) return num
        if (seen[num]) return seen[num]
        const prev = fib(num - 1)
        const prevPrev = fib(num - 2)
        seen[num - 1] = prev
        seen[num - 2] = prevPrev
        return prev + prevPrev
    }
    return fib(n)
}

test([
    { input: [9], expected: 34 },
    { input: [19], expected: 4181 },
    { input: [45], expected: 1134903170 }
], f)