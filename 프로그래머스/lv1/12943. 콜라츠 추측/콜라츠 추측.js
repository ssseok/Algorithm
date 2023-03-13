function solution(num) {
    
    let answer = 0; // 몇번 반복 했는 지 담는 변수

    while(num!==1){
      if(answer === 500){
        return -1
      }else{
        (num%2===0)?num=num/2 : num=num*3+1
        answer++
      }
    }

    return answer;
}