function solution(s){
    let count = 0;
    for(const a of s) {
        if(a === "(") {
            count++;
        } else {
            count--;
        }
    if(count < 0) return false;
    }
    return count === 0;
}