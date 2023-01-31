/*양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 
18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.*/

function solution(x) {
  let answer = 0;
  let sum = 0;
  let arr = String(x).split(""); // 1,7
  console.log("쪼개어진 : " + arr);

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]); // i = 1, 7
    console.log("arr[i]:" + arr[i]);
    console.log("sum : " + sum);
  }

  answer = x % sum == 0 ? true : false;
  console.log(answer);
  return answer;
}

solution(17);
