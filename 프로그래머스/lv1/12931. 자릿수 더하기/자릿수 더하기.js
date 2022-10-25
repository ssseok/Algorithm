function solution(n)
{
    let answer = 0;
    let nstr = String(n)
    for(let i=0; i<nstr.length; i++){
        answer += Number(nstr[i])
    }

    return answer;
}