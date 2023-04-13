function solution(a, b) {
    let aa = 0;
    if(a < b) {
    for(let i = a; i<=b; i++) {
        aa += i
        }
    } else {
        for(let i = b; i<=a; i++) {
        aa += i
        }
    }
    return aa
}