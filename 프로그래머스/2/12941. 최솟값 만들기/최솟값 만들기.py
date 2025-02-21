def solution(A, B):
    answer = 0
    arr = []
    
    # A는 오름차순 정렬
    sorted_A = sorted(A)
    # B는 내림차순 정렬
    sorted_B = sorted(B, reverse=True)
    
    for i in range(len(A)):
        arr.append(sorted_A[i] * sorted_B[i])
        
    for i in range(len(arr)) :
        answer += arr[i]
    
    return answer