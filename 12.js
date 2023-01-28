function solution(price, money, count) {
  var answer = 0;

  console.log("===========");
  for (let i = 1; i <= count; i++) {
    console.log(i);
    answer += price * i;
  }
  console.log("============");
  return answer > money
    ? answer - money + " 원이 부족한 나는 그지새끼"
    : "난부자야!";
}

console.log(solution(3, 20, 4));
