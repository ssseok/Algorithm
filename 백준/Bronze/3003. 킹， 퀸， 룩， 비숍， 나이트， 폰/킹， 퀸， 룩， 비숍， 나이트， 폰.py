S = [1, 1, 2, 2, 2, 8]
T = list(map(int,input().split()))

for i in range(len(S)) :
  print(S[i] - T[i], end=" ")

