
// https://leetcode.com/problems/trapping-rain-water/description/
// Given n non-negative integers representing an elevation map 
// where the width of each bar is 1, 
// compute how much water it can trap after raining.

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

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// time: O(n^2)
// function f(heights){
//     let totalWater = 0
//     for(let i = 0; i < heights.length; i++){
//         if(i === 0 || i === heights.length - 1) continue
        
//         const maxLeftBarHeight = Math.max(...heights.slice(0,i))
//         const maxRightBarHeight = Math.max(...heights.slice(i+1, heights.length))
//         const water = Math.min(maxLeftBarHeight, maxRightBarHeight) - heights[i]
//         console.log({water})
//         if(water > 0) totalWater += water
//     }
//     return totalWater
// }

// time: O(n) space: O(n)
// function f(heights){
//     let totalWater = 0
//     let leftMaxHeights = Array(heights.length).fill(0)
//     let rightMaxHeights = Array(heights.length).fill(0)

//     for (let i = 1; i < heights.length; i++) {
//         leftMaxHeights[i] = Math.max(leftMaxHeights[i-1], heights[i-1])
//     }

//     for (let i = heights.length - 2; i > -1; i--) {
//         rightMaxHeights[i] = Math.max(rightMaxHeights[i+1], heights[i+1])
//     }

//     for (let i = 0; i < heights.length; i++) {
//         const h = heights[i];
//         const water = Math.min(leftMaxHeights[i], rightMaxHeights[i]) - h
//         if(water > 0) totalWater+= water
        
//     }

//     return totalWater
// }

// TODO: try with 2 pointer

console.log(f([0,1,0,2,0])) // 1

console.log(f([0,1,0,2,1,0,1,3,2,1,2,1])) // 6