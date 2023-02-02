function solution(n) {
  let money = 1000 - n;
  const coins = [500, 100, 50, 10, 5, 1];
  let count = 0;

  for (coin of coins) {
    if (money === 0) break;
    count += parseInt(money / coin);
    money %= coin;
  }

  return count;
}

let result = solution(1);
console.log(result);
