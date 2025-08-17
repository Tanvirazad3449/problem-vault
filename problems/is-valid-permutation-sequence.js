// Given an array of length n, determine whether it is a permutation of the integers from 1 to n.

// A valid permutation must contain all numbers from 1 to n exactly once, in any order.

// Examples:

// Input: [3, 1, 2] → Output: true

// Input: [1, 2, 2, 3] → Output: false

// Input: [1, 3] → Output: false

import test from '../test.mjs'

function f(a){
    const set = new Set(a)
    // all numbers must be 1...n
    if([...set].length !== a.length) return false
    for(const item of a){
        if(item < 1 || item > a.length) return false
    }
    return true
}

test([
    {input: [[3, 1, 2]], expected: true},
    {input: [[1, 2, 2, 3]], expected: false},
    {input: [[1, 3]], expected: false},
    {input: [[1, 2, 4]], expected: false},
    {input: [[2,3]], expected: false}
], f)
const s = new Set([1,2,3])
console.log(s.size)
