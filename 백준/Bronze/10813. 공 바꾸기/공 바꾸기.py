N, M = map(int, input().split())
result = list(range(1,N+1))

for x in range(M):
    i, j = map(int, input().split())
    result[i-1] , result[j-1] = result[j-1], result[i-1]
print(" ".join(map(str, result)))