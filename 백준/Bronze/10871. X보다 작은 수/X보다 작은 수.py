A,B = map(int, input().split())
n_list = list(map(int, input().split()))
result = []

for x in range(A):
    if n_list[x] < B :
        result.append(n_list[x])

print(" ".join(map(str, result)))
