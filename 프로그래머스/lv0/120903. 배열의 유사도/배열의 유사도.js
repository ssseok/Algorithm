function solution(s1, s2) {
    const filter = s1.filter(x => s2.includes(x));
    if(filter.length === 0) {
        return 0;
    } else {
        return filter.length
    }
}