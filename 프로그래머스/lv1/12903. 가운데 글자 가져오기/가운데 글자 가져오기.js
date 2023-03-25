function solution(s) {
    var answer = "";
    let length = Math.round(s.length/2)
    if(length >= 1 && length <= 100){
        if(s.length%2==0){
            answer = s[length-1]+s[length]
        }else{
            answer = s[length-1]
        }
    }
    return answer;
}