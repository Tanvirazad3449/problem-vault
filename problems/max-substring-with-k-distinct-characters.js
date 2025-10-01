// max length of substring with EXACTLY k distinct characters 
import test from "../test.mjs"

function longestKSubstr(s, k) {
    let max = 0, map = new Map(), left = 0

    for(let i = 0; i < s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1)
        while(map.size > k){
            map.set(s[left], map.get(s[left]) - 1)
            if(map.get(s[left]) === 0){
                map.delete(s[left])
            }
            left++
        }
        if(map.size === k) max = Math.max(max, i - left + 1)
        
    }
    return max

}

// Example with Set (wrong behavior):

// s = "aabbc", k = 2

// Window grows: "aabb" → Set = {a, b}, size = 2 ✅

// Move left: remove 'a' → Set = {b}, but wait... there’s still another 'a' in the window ("abb").

// Now Set says size = 1, but the true number of distinct characters is 2. ❌

test([
{input: ['eceba', 2], expected: 3}, 
{input: ['aa', 1], expected: 2}, 
{input: ['abcba', 2], expected: 3}, 
{input: ['araaci', 2], expected: 4}, 
{input: ['araaci', 1], expected: 2}, 
{input: ['cbbebi', 3], expected: 5}, 
{input: ['', 2], expected: 0}, 
{input: ['a', 1], expected: 1}, 
{input: ['abcdef', 3], expected: 3}, 
{input: ['aabbcc', 3], expected: 6},
{input: ['aabbcc', 1], expected: 2}, 
{input: ['aabbcc', 2], expected: 4}, 
{input: ['abaccc', 2], expected: 4}, 
{input: ['aaaa', 1], expected: 4}, 
{input: ['abcabcabc', 2], expected: 2}, 
{input: ['pwwkew', 2], expected: 3}, 
{input: ['aabacbebebe', 3], expected: 7}, 
{input: ['xyz', 4], expected: 0}, 
], longestKSubstr)