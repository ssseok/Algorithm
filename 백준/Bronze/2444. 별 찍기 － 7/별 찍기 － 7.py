N = int(input())

# 다이아몬드 윗부분
for i in range(1, N + 1):
    print(' ' * (N-i) + '*' * i, end='')
    print('*' * (i-1))
    
# 다이아몬드 아랫부분
for j in range(1, N):
    print(' ' * j + '*' * (N-j), end='')
    print('*' * (N-1-j))