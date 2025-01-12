arr= []

for i in range(0, 10):
    A = int(input())
    if A%42 == 0:
        arr.append(A%42)
    else:
        arr.append(A%42)
print(len(set(arr)))