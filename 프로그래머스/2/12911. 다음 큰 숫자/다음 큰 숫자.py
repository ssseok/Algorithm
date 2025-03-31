def solution(n):
    
    #자연수 n을 이진수로 변환했을 때 1의 갯수
    cnt1 = bin(n)[2:].count("1")
    
    #자연수 n을 1씩 증가시킨다.
    while True:
        n += 1
        if cnt1 == bin(n)[2:].count("1"):
            break

    return n