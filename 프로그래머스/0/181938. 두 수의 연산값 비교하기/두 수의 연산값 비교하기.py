def solution(a, b):
    ab = int(str(a) + str(b))
    num = 2 * a * b
    return max(ab, num)