function solution(s) {
  let str = s.split(" "); //문자열 공백기준으로 쪼개기
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    // 쪼개진 문자열 길이만큼 돌기 (3번) => try, hello, world
    // console.log(i);
    for (let j = 0; j < str[i].length; j++) {
      // console.log(str[i]); => 예를들어 try.length 는 3이다. 문자열의 길이만큼(3만큼) 돈다.
      // console.log(str[i].length);
      if (j % 2 !== 0) {
        answer += str[i][j].toLowerCase();
        // console.log("홀수일때 :" + answer);
      } else {
        answer += str[i][j].toUpperCase();
        // console.log("짝수일때 :" + answer);
      }
    }
    // 마지막으로 if 조건문으로 단어사이에 공백을 추가해주면서 문제 끝 !
    if (i < str.length - 1) {
      // -1은 마지막 띄어쓰기 삭제임
      answer += " ";
      console.log(answer);
    }
  }

  return answer;
}

console.log(solution("try hello world"));
