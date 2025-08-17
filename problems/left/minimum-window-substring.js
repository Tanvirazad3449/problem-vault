import test from "../../test.mjs"

// https://leetcode.com/problems/minimum-window-substring/description/
// Given two strings s and t of lengths m and n respectively, 
// return the minimum window substring of s such that 
// every character in t (including duplicates) is included in the window. 
// If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.


function f(s, t) {
    if (t.length > s.length) return ""
    if (t === s) return t
    let l = 0, minWindow = ""
    for (let r = 0; r < s.length; r++) {
        while (t.split('').every(char => s.slice(l, r + 1).includes(char)) && (r-l+1 >=t.length)) {
            const currentWindow = s.slice(l, r + 1)
            // console.log({currentWindow})
            if (!minWindow || minWindow.length > currentWindow.length) {
                minWindow = currentWindow
            }
            l++
        }
    }
    return minWindow
}

test([
    { input: ["ADOBECODEBANC", "ABC"], expected: "BANC" },
    { input: ["a", "a"], expected: "a" },
    { input: ["a", "aa"], expected: "" },
    { input: ["bbaa", "baa"], expected: "baa"}
], f)