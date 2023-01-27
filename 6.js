//numbers => 0~9
//사용자가 자유롭게 0~9 사이의 숫자를 입력할 수있음
//(입력한 숫자 1,2,3,4,5) , 없는숫자: 6,7,8,9 => 30
// includes() 사용해서 없는숫자를 판별
//숫자가있으면 0을 더하고 없으면 없는 숫자끼리 합하여 리턴
//삼항연산자 사용

function solution(numbers) {
  var sum = 0;
  for (let i = 1; i < 10; i++) {
    sum += numbers.includes(i) ? 0 : i;
  }
  return sum;
}

console.log(solution([1, 2, 3, 4, 5]));
