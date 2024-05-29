def solution(ineq, eq, n, m):
    a = ineq + eq
    if a == ">=" :
        return int(n >= m)
    elif a == "<=" :
        return int(n <= m)
    elif a == ">!" :
        return int(n > m)
    elif a == "<!" :
        return int(n < m)