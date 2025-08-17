// Given an integer array nums, 
// return all the triplets 
// [nums[i], nums[j], nums[k]] 
// such that 
// i != j, 
// i != k, and 
// j != k, and 
// nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

import test from '../../test.mjs'

function f(a) {
    const set = new Set(a)
    const res = []
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        if(set.has(0-element)) res.push([element, 0-element])
        
    }
    return res
}

test([
    { input: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]] },
    { input: [[0, 1, 1]], expected: [] },
    { input: [[0, 0, 0]], expected: [[0, 0, 0]] },

], f)