function solution(s){
    let count = 0;
    for(const a of s) {
        a === "(" ? count++ : count--;
        if(count < 0) return false
    }
    return count === 0
}