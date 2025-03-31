def solution(n):
    a, b = 0, 1             # F(0) = a, F(1) = b
    
    for i in range(2, n+1): # n은 2 이상이므로 2부터 n까지
        answer = a + b      # F(n) = F(n-1) + F(n-2)
        a, b = b, answer    # b = a + 1, answer = b + 1
    
    return answer % 1234567 # 1234567로 나눈 나머지 반환