def solution(num_list):
    for i in range(len(num_list)) :
        if num_list[i-1] > num_list[i-2] :
            num_list.append(num_list[i-1] - num_list[i-2])
            return num_list
        else :
            num_list.append(num_list[i-1] * 2)
            return num_list