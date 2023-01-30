/*길이가 n이고, "수박수박수박수...."와 같은 패턴을
유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
예를들어 n이 4이면 "수박수박"을 리턴하고 
3이라면 "수박수"를 리턴하면 됩니다.*/

// function solution(n) {
//   let answer = "";

//   for (let i = 0; i < n; i++) {
//     answer += i % 2 === 0 ? "수" : "박";
//   }
//   console.log(answer);
//   return answer;
// }

// solution(2);

////////////////////////////////////////////////

function solution(n) {
  var result = "수박";
  result = result.repeat(n - 1).substring(0, n);
  console.log(result);
  return result;
}

solution(3);

////////////////////////////////////////

let result = "야호";
result = result.repeat(4 - 1).substring(0, 3);
console.log(result);
