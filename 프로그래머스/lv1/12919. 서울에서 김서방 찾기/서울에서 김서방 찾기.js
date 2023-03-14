function solution(seoul) {
  let idx = seoul.findIndex((item) => item === "Kim");
  return seoul.includes("Kim") ? `김서방은 ${idx}에 있다` : null;
}