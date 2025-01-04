count = 0 #호출 횟수를 저장 할 변수 선언
def recursion(s, l, r):
    global count #전역변수 사용을 위해 global 사용
    count += 1 #count에 1 더하기
    if l >= r: return 1
    elif s[l] != s[r]: return 0
    else: return recursion(s, l+1, r-1)

def isPalindrome(s):
    global count #전역변수 사용을 위해 global 사용
    count = 0 #count 변수 초기화
    return recursion(s, 0, len(s)-1)


T = int(input())
for i in range(T):
    S = input() 
    print(isPalindrome(S),count)