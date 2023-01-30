// function solution(s) {
//   return s.match(/p/gi).length == s.match(/y/gi).length;
// }

//콘솔로그위치활용과 함수리턴하기 연습하기 좋은 문제였다

function solution(s) {
  let change = s.toLowerCase();
  // console.log(change);
  let check_p = change.split("p").length;
  // console.log(check_p);
  let check_y = change.split("y").length;
  // console.log(check_y);

  return check_p == check_y ? true : false;
}

const result = solution("pPoooyY");
console.log(result);
