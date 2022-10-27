function solution(n) {
    
    var answer = 0;

    let sqrt = Math.sqrt(n)
    // Math.sqrt() : 값의 제곱근을 구하는 함수

    if(Number.isInteger(sqrt)){
    // Number.isInteger() : 값이 정수인 지 실수인 지 체크하는 함수
      answer = Math.pow(sqrt+1, 2)
      // Math.pow(대상 숫자, 거듭 제곱 횟수)
      // 정수의 거듭제곱 값을 계산해주는 함수
    }else{
      answer = -1
    }

    return answer;
}