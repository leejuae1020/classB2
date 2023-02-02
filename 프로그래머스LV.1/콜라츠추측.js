// function solution(num) {
//   for (let i = 0; i < 500; i++) {
//     if (num !== 1) {
//       //1이 아닌경우
//       num = num % 2 == 0 ? num / 2 : num * 3 + 1;
//     } else {
//       //1인경우
//       return (answer = i);
//     }
//   }

//   return (answer = -1);
// }

function solution(num) {
  let answer = 0;

  while (num !== 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer += 1;
    console.log(answer);

    if (answer === 500) {
      answer = -1;
      // console.log(answer);
      break;
    }
  }

  return answer;
}

solution(626331);
