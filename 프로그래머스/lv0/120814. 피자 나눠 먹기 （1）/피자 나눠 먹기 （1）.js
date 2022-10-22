function solution(n) {
    let a = 7
    if(a >= n) {
        return 1;
    } else {
        return Math.ceil(n/a)
    }
}