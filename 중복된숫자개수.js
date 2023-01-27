function solution(array, n) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      newArr.push(array[i]);
    }
  }
  return newArr.length;
}
