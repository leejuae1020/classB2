function solution(array, height) {
  var answer = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) answer += 1;
  }

  return answer;
}

console.log(solution([180, 120, 140], 190));
