function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    //만약 문자열의 길이를 2로 나누었을때 나머지가 0이라면 = 짝수라면
    answer = s[s.length / 2 - 1] + s[s.length / 2];
    //문자열의 가운데 두글자 각 index번호 얻어오기
  } else {
    //홀수라면 ....신라면...
    answer = s[Math.floor(s.length / 2)];
    // s길이의 1/2값에서 소수점을 떼버린 index값
  }

  return answer;
}

const result = solution("leejuae");
console.log(result);

//문자열길이알기 .length
