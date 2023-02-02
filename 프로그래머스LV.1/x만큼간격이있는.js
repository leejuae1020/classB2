function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);

    console.log("i = " + i);
    console.log("answer = " + answer);
  }
  return answer;
}

console.log(solution(2, 5));
