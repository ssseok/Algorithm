import math

H, M = map(int, input().split())
M2 = int(input())
M3 = M + M2
M4 = math.trunc(M3 / 60)
if M3 >= 60:
    H += M4
    M3 %= 60
    if H >= 24 :
        H -= 24
else:
    H
    M3
        

print(H, M3)
