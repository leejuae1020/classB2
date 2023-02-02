function solution(str) {
  let sum = 0;
  let cnt = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "O") {
      cnt++;
    } else {
      cnt = 0;
    }
    sum += cnt;
  }
  return sum;
}
let str = "OOOOOOOOOO";
console.log(solution(str));
