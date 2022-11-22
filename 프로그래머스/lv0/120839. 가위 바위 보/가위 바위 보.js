function solution(rsp) {
    let a = "2"
    let b = "0"
    let c = "5"
    let arr = []
    for(let i=0; i<rsp.length; i++) {
        if(rsp[i] === a) {
            arr.push(b)
        } else if(rsp[i] === b) {
            arr.push(c)
        } else if(rsp[i] === c) {
            arr.push(a)
        }
    }
    return arr.join("")
}