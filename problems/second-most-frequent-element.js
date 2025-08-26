// 
import test from '../test.mjs'

// You are given an array of elements (which may contain integers, strings, or other hashable values). 
// Your task is to find the element that occurs with the second-highest frequency in the array.
function f(a){
    let freq = {}, maxFreq = 0, secondMostElem = null, secondmaxFreq = 0
    for (let i = 0; i < a.length; i++){
        freq[a[i]] = (freq[a[i]] || 0) + 1
    }

    for(const key in freq){
        if(maxFreq < freq[key]){
            maxFreq = freq[key]
        }
    }

    for(const key in freq){
        if(freq[key] < maxFreq && secondmaxFreq < freq[key]){
            secondMostElem = key
            secondmaxFreq = freq[key]
        }
    }

    return Number(secondMostElem) || secondMostElem
}
test([
    {input: [[1, 2, 2, 3, 3, 3, 4, 4]], expected: [2, 1]},       // or 4 (tie acceptable)
    {input: [["apple", "banana", "apple", "orange", "banana", "banana", "grape"]], expected: "apple"},
    {input: [[7, 7, 8, 8, 9, 9, 10]], expected: 10},        
    {input: [[5, 5, 5, 5, 5]], expected: null},             // only one unique element
    {input: [[1, "a", "a", 2, 2, 2, 3, "b", "b", "b"]], expected: 'a'},
    {input: [[4, 4, 4, 4, 2, 2, 2, 3, 3, 1, 5, 5, 5, 5, 5]], expected: [4]}
], f);
