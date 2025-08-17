// https://leetcode.com/problems/largest-substring-between-two-equal-characters

function f(s){
    let firstIndexes = new Map()
    let res = {}

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(firstIndexes.has(element)){
            res[element] = i - firstIndexes.get(element) - 1
        }else{
            firstIndexes.set(element, i)
        }
    }
    return res
}
console.log(f('abcadpac')) //expected { a: 5, c: 4 }
