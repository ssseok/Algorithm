function solution(n) {
    let a =0
    for(let i=2; i<=n; i++) {
        if(i % 2 === 0) {
            a+=i
        }
    } 
    return a
}