function solution(s){
    let arr =[]
    let arr2 =[]
    for(let i=0; i<s.length; i++) {
        if(s[i] === "p" || s[i] === "P"){
            arr.push(i)
        }
        if(s[i] === "y" || s[i] === "Y") {
            arr2.push(i)
        }
    }
    return arr.length === arr2.length
}