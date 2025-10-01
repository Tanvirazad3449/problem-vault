// https://leetcode.com/problems/largest-substring-between-two-equal-characters

import test from "../test.mjs"

function f(s){
    let max = -1
    const firstIndexes = new Map()
    for(let i = 0; i < s.length; i++){
        if(!firstIndexes.has(s[i])){
            firstIndexes.set(s[i], i)
        }
        const subStringLength = i - firstIndexes.get(s[i]) - 1
        max = Math.max(subStringLength, max) 
    }
    return max
}


test([
    { input: ['abcadpac'], expected: 5 },
    { input: ['abca'], expected: 2 },
    { input: ['aa'], expected: 0 },
    { input: ['cbzxy'], expected: -1 },











], f)