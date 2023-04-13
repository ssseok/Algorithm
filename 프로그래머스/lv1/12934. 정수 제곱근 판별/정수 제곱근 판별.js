function solution(n) {
    let a = Math.sqrt(n)
    let b = Math.floor(a)+1
    if(!Number.isInteger(a)) return -1
    return b**2
}