function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  return sum / arr.length;
}

//acc 초기값이없으므로 0부터 시작 => cur값들을 acc에계속 더하여 누적함
//cur 현재요소
