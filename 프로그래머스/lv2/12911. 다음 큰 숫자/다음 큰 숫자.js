function solution(n) {
    const len = [...n.toString(2)].filter(a => a === "1").length
    while(true) {
        n++;
        if([...n.toString(2)].filter(a => a === "1").length === len) return n;
    }
}