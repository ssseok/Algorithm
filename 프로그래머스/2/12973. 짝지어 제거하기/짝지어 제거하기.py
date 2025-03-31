def solution(s):
    answer = 0
    stackS = []
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.    
    
    
    for i in range(len(s)):
        
        #스택이 비어있는 경우
        if len(stackS) == 0:
            stackS.append(s[i])
        #제일 뒤에 있는 원소를 비교
        elif stackS[-1] == s[i]:
            stackS.pop()
        #삭제 가능한 문자가 없을 때
        else:
            stackS.append(s[i])
    
    #문자열 제거 후 남아있는게 없으면 1 반환
    if len(stackS) == 0:
        return 1
    
    return answer