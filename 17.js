function solution(seoul) {
  var answer = "";

  for (i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = `김서방은 ${i}에 있다`;
    }
  }
  return answer;
}

function findKim(seoul) {
  var idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}

// indexOf는 해당 index 자체를 찾아 splice를 이용한 제거에 유리하나
// includes는 return으로 T/F 처리에 유리
//나는 includes를 먼저 떠올렸는데 index 자리를 찾는것이 따로있었구나 ?
