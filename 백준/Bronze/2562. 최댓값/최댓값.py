arr = []
X = ""
for x in range(1, 10) : 
    A = int(input())
    arr.append(A)

for i in range(len(arr)):
    if arr[i] == max(arr) : 
        X = i

print(max(arr))
print(X+1)