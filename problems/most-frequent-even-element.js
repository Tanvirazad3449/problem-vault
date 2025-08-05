import test from "../__test.mjs"

// https://leetcode.com/problems/most-frequent-even-element/description/
// Given an integer array nums, return the most frequent even element.
// If there is a tie, return the smallest one. If there is no such element, return -1.

// Example 1:
// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.

// Example 2:
// Input: nums = [4,4,4,9,2,4]
// Output: 4
// 4 is the even element appears the most.

// Example 3:
// Input: nums = [29,47,21,41,13,37,25,7]
// Output: -1
// There is no even element.

function f(nums){
    const freq = nums.filter(item => item % 2 === 0).reduce((a,c) => (a[c] = (a[c] || 0) + 1,a), {})
    const max = Math.max(...Object.values(freq))
    return Object.entries(freq).reduce((a,[item, frequency]) => (a = (frequency === max && (a < 0 || a > item)) ? item : a, parseInt(a)), -1)
}

test([
    {input: [[0,1,2,2,4,4,1]], expected: 2},
    {input: [[4,4,4,9,2,4]], expected: 4},
    {input: [[29,47,21,41,13,37,25,7]], expected: -1}
], f)
