// Given an array of strings, group all anagrams together and return the groups as a list of lists.

// time: O(nmlog(m)) space: O(n * m), where m is the average length of words in the input array of length n
function f(a){
    const map = new Map()
    for(const word of a){
        const sortedWord = word.split('').sort().join('')
        if(!map.has(sortedWord)) map.set(sortedWord, [])
        map.get(sortedWord).push(word)
    }
    return [...map.values()]
}

console.log(f(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])) // [["eat","tea","ate"],["tan","nat"],["bat"]]