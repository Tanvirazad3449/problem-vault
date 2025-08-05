import test from "../__test.mjs"

// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// MY THOUGHTS
// Use Set to track characters in current window
// When duplicate found, shrink left pointer until duplicate removed
// Always expand right pointer and add new character to Set
// Track maximum window size seen so far

function f(s){
    const set = new Set()
    let left = 0, maxLength = 0 
    for(let i = 0; i < s.length; i++){
        const char = s[i]
        while(set.has(char)){
            set.delete(s[left])
            left ++
        }
        set.add(char)
        maxLength = Math.max(maxLength, i - left +1)
    }
    return maxLength
}

test([
    {input: ["abcabcbb"], expected: 3},
    {input: ["bbbbb"], expected: 1},
    {input: ["pwwkew"], expected: 3}
], f)