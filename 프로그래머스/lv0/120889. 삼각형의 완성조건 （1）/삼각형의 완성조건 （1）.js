function solution(sides) {
    const sort = sides.sort((a,b) => b-a);
    return sort[0] < sort[1]+sort[2] ? 1 : 2
}