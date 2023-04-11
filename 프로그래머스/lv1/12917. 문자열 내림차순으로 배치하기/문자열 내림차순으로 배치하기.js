function solution(s) {
    let filter = [...s].filter(a => a === a.toLowerCase())
    let filter2 = [...s].filter(a => a === a.toUpperCase())
    let sort = filter.sort()
    let sort2 = filter2.sort()
    return [...sort.reverse(), ...sort2.reverse()].join("")
}