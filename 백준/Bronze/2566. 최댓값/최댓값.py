A =[]
maxValue = -1
rrr, ccc = 0, 0
for row in range(9):
    row = list(map(int, input().split()))
    A.append(row)
    
for row in range(9):
    for col in range(9):
        if maxValue <= A[row][col] :
          maxValue = A[row][col]
          rrr = row+1
          ccc = col+1


print(maxValue)
print(rrr, ccc)