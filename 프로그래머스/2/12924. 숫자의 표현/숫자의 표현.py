def solution(n):
    answer = 0  # 연속된 자연수로 n을 표현하는 방법의 수
    for i in range(1, n+1):
        hap = 0
        
        # hap이 n보다 크거나 같아질 때까지 i부터 순차적으로 더함
        while hap < n:
            hap += i
            i += 1
        if hap == n: # 만약 hap이 n과 같으면 연속된 자연수로 나타낼 수 있으므로 방법 +1
            answer += 1
            
    return answer