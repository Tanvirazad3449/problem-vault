// check if two strings are isomorphic, replacing characters in one can get the other string
// 'egg' and 'add' are isomorphic
// 'foo' and 'bar' are not

import test from '../test.mjs'

function f(s, q) {
    if(s.length !== q.length) return false
    const s2q = new Map(), q2s = new Map()

    for (let i = 0; i < s.length; i++) {
        const charS = s[i], charQ = q[i]
        if(s2q.has(charS) && s2q.get(charS) !== charQ) return false
        if(q2s.has(charQ) && q2s.get(charQ) !== charS) return false
        s2q.set(charS, charQ)
        q2s.set(charQ, charS)
    }
    return true
}

test([
    { input: ["zoo", "pkk"], expected: true },
    { input: ["foo", "bar"], expected: false },
    { input: ["ab", "cc"], expected: false },
    { input: ["abab", "baba"], expected: true },
    { input: ["abba", "abab"], expected: false },
    { input: ["aba", "abb"], expected: false },
    { input: ["abc", "def"], expected: true },
], f)