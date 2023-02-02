/*자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.*/

/*근본*/

function solution(n) {
  var answer = 0;
  var m = String(n);

  for (let i = 0; i < m.length; i++) {
    answer += parseInt(m[i]);
  }
  console.log(answer);
  return answer;
}

solution(123);

//////////////////////////////////////////////////////////////////////////////////////////////////

/* reduce() 사용 */

function solution(n) {
  let arr = String(n)
    .split("")
    .map((x) => parseInt(x));
  return arr.reduce((acc, cur) => acc + cur, 0);
}

const result = solution(123);
console.log(result);
