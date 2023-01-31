function solution(a, b) {
  var answer = 0;
  for (i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
// a: 1,2,3,4
function solution(a, b) {
  var answer = a.reduce((acc, _, idx) => (acc += a[idx] * b[idx]), 0);
  return answer;
}
