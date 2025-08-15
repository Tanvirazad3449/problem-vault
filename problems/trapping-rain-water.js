
// https://leetcode.com/problems/trapping-rain-water/description/
// Given n non-negative integers representing an elevation map 
// where the width of each bar is 1, 
// compute how much water it can trap after raining.

import test from "../test.mjs"

//
//                                             ███████                     
//                                             ███████                         
//                                             ███████                         
//                    ███████..................██████████████......███████             
//                    ███████..................██████████████......███████      
//                    ███████..................██████████████......███████      
//       ███████......█████████████......████████████████████████████████████████
//       ███████......█████████████......████████████████████████████████████████
// ______███████......█████████████......████████████████████████████████████████
//   0      1     0      2     1      0     1     3      2      1      2     1                                                                                

// Input: h = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// __________________________ APPROACH 1 __________________________

// find max of both sides every iteration
// time: O(n^2) space: O(n)
// function f(h) {
//     let total = 0
//     for (let i = 1; i < h.length - 1; i++) {
//         let maxL = Math.max(...h.slice(0, i)), maxR = Math.max(...h.slice(i + 1, h.length))
//         const water = Math.min(maxL, maxR) - h[i]
//         if (water > 0) total += water
//     }
//     return total
// }


// __________________________ APPROACH 2 __________________________
// memoize all leftMaxes and rightMaxes
// time: O(n) space: O(n)
// function f(h) {
//     let maxL = new Array(h.length).fill(0), maxR = [...maxL]
//     let total = 0

//     for (let i = 0; i < h.length; i++) {
//         maxL[i] = Math.max(maxL[i - 1] || 0, h[i - 1] || 0)
//     }

//     for (let i = h.length - 1; i > -1; i--) {
//         maxR[i] = Math.max(maxR[i+1] || 0, h[i+1] || 0)
//     }

//     for(let i = 0; i < h.length; i++){
//         const water = Math.min(maxL[i], maxR[i]) - h[i]
//         if(water > 0) total += water
//     }

//     return total

// }


// __________________________ APPROACH 3 __________________________
// two pointer technique, look for the boundary for the smaller block
// time: O(n) space: O(1) 
function f(h){
    let l = 0, r = h.length - 1, maxL = 0, maxR = 0, total = 0
    while(l < r){
        if(h[l] < h[r]){
            maxL = Math.max(maxL, h[l-1] || 0)
            const water = maxL - h[l]
            if(water > 0) total += water
            l++
        }else{
            maxR = Math.max(maxR, h[r+1] || 0)
            const water = maxR - h[r]
            if(water > 0) total += water
            r--
        }
    }
    return total
}


test([
    {input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6},
    {input: [[0, 3, 1, 2, 4, 1, 2]], expected: 4},
], f)

