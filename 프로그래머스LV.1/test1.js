function solution(num) {
  let money = 1000 - num;
  const coins = [500, 100, 50, 10];
  let cnt = 0;

  for (coin of coins) {
    if (money === 0) break;
    cnt += parseInt(money / coin);
    money %= coin;
  }
  return cnt;
}
let num1 = 160;
console.log(solution(num1));
