n = int(input())
arr = [[0] * 101 for _ in range(101)] # 도화지의 크기가 100이하

for _ in range(n): # 색종이를 1로 채워준다
    a, b = map(int, input().split())
    for i in range(a, a+10):
        for j in range(b, b+10):
            arr[i][j] = 1


res = 0
for i in arr: # 모두더한다
    res += sum(i)

print(res) # 정답출력
