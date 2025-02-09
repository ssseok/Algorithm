A, B, C, D, E = list(input()), list(input()), list(input()), list(input()), list(input())
result = ""
max_length = max(len(A), len(B), len(C), len(D), len(E))

for i in range(max_length):
    if i < len(A):
        result += A[i]
    if i < len(B):
        result += B[i]
    if i < len(C):
        result += C[i]
    if i < len(D):
        result += D[i]
    if i < len(E):
        result += E[i]

print(result)