student = [i for i in range(1, 31)]
arr = []
for x in range(len(student)-2) :
    A = int(input())
    arr.append(A)
for i in student:
    if i not in arr :
        print(i)

