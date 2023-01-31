/* 자연수 n을 뒤집어 각 자리 숫자를 원소로 
가지는 배열 형태로 리턴해주세요. 
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.*/

function solution(n) {
  let arr = String(n) //문자열로 만들어주기
    .split("") //문자열 길이 쪼개주기
    .reverse() //reverse 뒤집기!
    .map((a) => parseInt(a)); //쪼개진 요소들 정수로 변환하기!

  console.log(arr);
}

solution(12345);
