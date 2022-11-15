function solution(my_string) {
    const filter = [...my_string].filter(a => Number(a))
    const map = filter.map((a) => Number(a))
    const reduce = map.reduce((pre,cur) => pre+cur,0)
    return reduce

}