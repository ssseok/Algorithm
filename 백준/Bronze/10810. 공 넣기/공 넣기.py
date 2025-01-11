N, M = map(int, input().split())

result = [0] * N

for x in range(M):
    i, j, k = map(int, input().split())
    result[i-1:j] = [k] * (j - (i - 1))

print(" ".join(map(str, result)))