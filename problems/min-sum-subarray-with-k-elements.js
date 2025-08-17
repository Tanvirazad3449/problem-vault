// get min sum of sub array with k elements
function f(a, k){
    let curr = a.slice(0,k).reduce((a,c) => (a=a+c), 0), min = curr
    for (let i = k; i < a.length; i++) {
        curr = curr - a[i-k] + a[i]
        
        min = Math.min(min, curr)
    }
    return min
}

console.log(f([2,1,5,1,3,2], 3))