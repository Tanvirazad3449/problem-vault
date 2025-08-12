
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

//TODO: try optimizing
function f(heights){
    let totalWater = 0
    for(let i = 0; i < heights.length; i++){
        if(i === 0 || i === heights.length - 1) continue
        
        const maxLeftBarHeight = Math.max(...heights.slice(0,i))
        const maxRightBarHeight = Math.max(...heights.slice(i+1, heights.length))
        const water = Math.min(maxLeftBarHeight, maxRightBarHeight) - heights[i]
        
        if(water > 0) totalWater += water
    }
    return totalWater
}

console.log(f([0,1,0,2,1,0,1,3,2,1,2,1]))