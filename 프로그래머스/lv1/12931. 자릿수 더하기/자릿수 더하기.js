function solution(n)
{
    let arr = n.toString().split("").map(a => Number(a))
    return arr.reduce((acc,cur) => acc+cur,0)

}