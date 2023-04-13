function solution(n) {
    let a = []
    for(let i=1; i<=n; i++) {
        if(n % i === 1) {
             a.push(i)
        }
    }
    return a[0]
}