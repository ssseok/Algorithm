x = int(input())
y = int(input())

a1 = x > 0 and y > 0
a2 = x < 0 and y > 0
a3 = x < 0 and y < 0
a4 = x > 0 and y < 0

if a1 :
    print(1)
elif a2 :
    print(2)
elif a3 :
    print(3)
elif a4 :
    print(4)