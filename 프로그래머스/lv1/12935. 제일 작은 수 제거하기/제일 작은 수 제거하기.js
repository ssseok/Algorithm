function solution(arr) {

  let answer = []
  let min = arr[0]
  // 최솟값의 기준으로 배열의 첫번째 요소를 넣는다.

  if(arr.length == 1){
    return [-1];
    // 배열의 요소가 하나 밖에 없는 경우
    // 비교할 대상이 없기 때문에 -1을 배열에 담아서 return
  }else{ // 배열의 요소가 2개 이상일 경우
    for(let i = 0; i<arr.length; i++){
      if(min > arr[i]){
      // if문을 사용해서 min의 값과 arr[i]를 비교해서
      // 더 작은 값이 나오면
        min = arr[i]
        // min의 값을 바꾼다.
      }
    }
  }

  arr.splice(arr.indexOf(min),1)
  // arr 배열에서 가장 작은 숫자의 index 요소를 넣고 삭제한다.
    answer = arr;
  // arr 배열 원본이 바뀌었기 때문에 answer에 넣는다.

  return answer;
}