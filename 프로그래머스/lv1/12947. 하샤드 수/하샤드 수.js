function solution(x) {
    
    let answer = true;

    let arr = x.toString().split("")
    // == (x+'').split("")
    //정수 x의 자릿수를 더하기 위해서 x.toString을 사용해서 x를 숫자 타입에서 문자 타입으로 변환
    //문자열로 바뀐 x를 split()을 사용해서 한글자씩 나눠 arr라는 배열에 담음
    let sum = 0
    //자릿수를 더한 합을 저장하기 위해 sum이라는 변수를 지정 해주고 0으로 초기화

    for(let i = 0; i<arr.length; i++){
      sum += parseInt(arr[i])
    // for문을 돌리면서 arr[i]의 값을 parseInt()를 사용하여 정수로 바꾼 후 sum에 더한다
    }

    answer = (x % sum === 0? true : false)
    //삼항연산자를 사용하여 x를 sum으로 나눴을 때 나누어 떨어지면(나머지가 0이면) true를 아니라면      false를 answer에 담아서 answer를 return

    return answer;
}