function solution(num, str) {
  let num = parseInt(num);
  let str = [
    "OOXXOXXOOO",
    "OOXXOOXXOO",
    "OXOXOXOXOXOXOX",
    "OOOOOOOOOO",
    "OOOOXOOOOXOOOOX",
  ];

  const num = str[0];

  for (let i = 1; i <= n; i++) {
    let score = 0;
    let sum = 0;

    for (let j = 0; j < str[i].length; j++) {
      if (str[i][j] === "O") {
        score++;
      } else {
        score = 0;
      }
    }
  }
}
















const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const number = +input[0];

for (let i = 1; i <= number; i++) {
  let score = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      score++;
    } else {
      score = 0;
    }
    sum += score;
  }
  console.log(sum);
}





const N = parseInt(input[0]); // 0번째 값인 5를 N에 입력

for (let i = 1; i <= N; i++) {
  // 1번째부터 5번째까지 OX값 반복문 돌려줌
  let count = 0;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    // 각각 OX문장에서 문장의 처음부터 끝까지 반복문 돌려줌
    if (input[i][j] == "O") {
      // 해당 자리가 O일경우
      count++; // 카운트값 증가시켜주기
    } else {
      // 해당 자리가 X일 경우에는
      count = 0; // 카운트를 도로 0을로 만들어주기
    }
    sum += count; // 각각 자리 값에서의 카운트값을 sum에 누적시켜주기
  }
  console.log(sum); // 최종 sum 값 출력
}
}
let str = "OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str));
