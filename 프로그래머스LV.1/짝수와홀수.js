function solution(num) {
  let answer = "";
  if (num % 2 === 0) {
    return (answer = "Even");
  } else {
    return (answer = "Odd");
  }
}

const result = solution(4);
console.log(result);

// function solution(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }

// const result2 = solution(3);
// console.log(result2);
