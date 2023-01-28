function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

/*map() 메서드는 배열내의 모든 요소 각각에 대하여 주어진 함수를
모아서 새로운 배열로 만들어 반환해줍니다. */
//a : arr1 안의 배열 [1,2],[2,3]
//b : a의 각 요소 1,2,2,3
//각 b에 B(2중 배열)의 각 요소를 더해주면 됨

// function solution(arr1, arr2) {
//   var answer = [];
//   for (var i = 0; i < arr1.length; i++) {
//     answer[i] = [];
//     console.log(answer[i]);
//     for (var j = 0; j < arr1[i].length; j++) {
//       answer[i][j] = arr1[i][j] + arr2[i][j];
//     }
//   }
//   return answer;
// }

// console.log(
//   solution(
//     [
//       [1, 2],
//       [2, 3],
//     ],
//     [
//       [3, 4],
//       [5, 6],
//     ]
//   )
// );

/* 첫번째 배열의 크기 만큼 반복문을 돌리고, answer에 i번째 행을 추가한다.
행의 개수만큼 반복문을 돌리고, 같은 행렬끼리 덧셈한다.*/
