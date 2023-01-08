function solution(my_string) {
  const low = my_string.toLowerCase()
  const sort = [...low].sort().join("")
  
  return sort
}