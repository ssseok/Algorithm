A, B, C = map(int, input().split())
arr = [A, B, C]

if len(set(arr)) == 1:  # 모두 같은 값
    print(10000 + arr[0] * 1000)
elif len(set(arr)) == 2:  # 같은 값이 2개일 경우
    for num in arr:  # 중복된 숫자를 찾기
        if arr.count(num) == 2:
            print(1000 + num * 100)
            break
else:  # 모두 다른 값
    print(max(arr) * 100)
