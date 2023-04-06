function solution(s) {
    let zero =0
    let count =0
    while(s.length!==1){
        const originLen = s.length
        s=[...s].filter(v=>v==='1').join('')
        const len = s.length
        zero+=originLen-len
        s=len.toString(2)
        count++
    }
    return[count,zero]
}