function solution(participant, completion) {
  participant.sort(); //참가자 배열 정렬
  completion.sort(); //완주자 배열 정렬
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      //인덱스 0부터 순차적으로 두 배열 비교
      return participant[i];
      //비완주자가 참가자 배열에 나올 경우 출력
    }
  }
}

/*완주자가 참여자 보다 한 명 적은 점을 이용하여
참여자와 완주자 두 배열을 Array.sort()를 이용하여 똑같이 정렬시키고 같은 인덱스의 값이 다를 경우
반환하는 식으로 풀이하니 통과할 수 있었다.*/
