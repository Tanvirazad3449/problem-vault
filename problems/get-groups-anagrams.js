// Given an array of strings, group all anagrams together and return the groups as a list of lists.

// time: O(nmlog(m)) space: O(n * m), where m is the average length of words in the input array of length n

import test from '../test.mjs'

function f(a) {
    const map = new Map()
    for (const word of a) {
        const sortedWord = word.split('').sort().join('')
        if (!map.has(sortedWord)) map.set(sortedWord, [])
        map.get(sortedWord).push(word)
    }
    return [...map.values()]
}

test([
    { input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']], expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] },
    { input: [['']], expected: [['']] },
    { input: [['a']], expected: [['a']] },
    { input: [['abc', 'bca', 'cab', 'xyz', 'zyx', 'yxz']], expected: [['abc', 'bca', 'cab'], ['xyz', 'zyx', 'yxz']] },
    { input: [['listen', 'silent', 'enlist', 'google', 'gooegl']], expected: [['listen', 'silent', 'enlist'], ['google', 'gooegl']] },
    { input: [['rat', 'car', 'tar', 'arc', 'art', 'rac']], expected: [['rat', 'tar', 'art'], ['car', 'arc', 'rac']] },
    { input: [[]], expected: [] },
    { input: [['aaa', 'aaa', 'aaa']], expected: [['aaa', 'aaa', 'aaa']] },
    { input: [['abc', 'def', 'ghi']], expected: [['abc'], ['def'], ['ghi']] },
    { input: [['a', 'b', 'c', 'd', 'e']], expected: [['a'], ['b'], ['c'], ['d'], ['e']] },
    { input: [['abcd', 'dcba', 'bdca', 'xyz']], expected: [['abcd', 'dcba', 'bdca'], ['xyz']] },
    { input: [['race', 'care', 'acre', 'eared', 'reread']], expected: [['race', 'care', 'acre'], ['eared'], ['reread']] },
], f)
