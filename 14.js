function solution(arr, divisor) {
  let answer = [];
  arr.map((a) => {
    // . && 짧은 조건문으로 왼쪽 변이 참이면 오른쪽 변을 실행한다.
    a % divisor === 0 && answer.push(a);
  });

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
