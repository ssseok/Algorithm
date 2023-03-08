function solution(n) {
    for(let i=1; i<=10000000; i++){
        if(n % i === 1) {
            return Math.min(i)
        }
    }
}