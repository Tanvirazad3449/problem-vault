// 
import test from '../test.mjs'

// You are given an array of elements (which may contain integers, strings, or other hashable values). 
// Your task is to find the element that occurs with the second-highest frequency in the array.
function f(a){
    // find maxfreq count and the item that appeared max times, maybe using a map to store

    let map = new Map(), maxFreq = 0, secondMostFreq = 0, secondMostFreqItem = null

    for(const item of a){
        map.set(item, (map.get(item) || 0) + 1)
    }

    for(const count of map.values()){
        if(count > maxFreq) maxFreq = count
    }

    for(const [item, count] of map.entries()){
        if(count > secondMostFreq && count < maxFreq){
            secondMostFreq = count
            secondMostFreqItem = item
        }
    }

    return secondMostFreqItem

}
test([
    {input: [[1, 2, 2, 3, 3, 3, 4, 4]], expected: [2, 1]},       // or 4 (tie acceptable)
    {input: [["apple", "banana", "apple", "orange", "banana", "banana", "grape"]], expected: "apple"},
    {input: [[7, 7, 8, 8, 9, 9, 10]], expected: 10},        
    {input: [[5, 5, 5, 5, 5]], expected: null},             // only one unique element
    {input: [[1, "a", "a", 2, 2, 2, 3, "b", "b", "b"]], expected: 'a'},
    {input: [[4, 4, 4, 4, 2, 2, 2, 3, 3, 1, 5, 5, 5, 5, 5]], expected: [4]}
], f);
