function solution(before, after) {
    let arr = [...before].sort().toString()
    let arr2 = [...after].sort().toString()
    

     return arr === arr2 ? 1 : 0
    
}