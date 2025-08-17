// max length of substring with k distinct characters 

function f(s, k){
    const set = new Set()
    let left = 0, max = 0
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        while(set.size === k && !set.has(char)){
            set.delete(s[left])
            left++
        }
        set.add(char)
            max = Math.max(max, i - left + 1)
    }
    return max
}
console.log(f('abbc', 2)) // 5