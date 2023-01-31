function solution(a, b) {
  //dayWeek 에 요일 넣어주기
  let dayWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // 템플릿리터럴을 사용
  let date = new Date(`2016-${a}-${b}`);

  // 요일 받아오는 함수 getDay사용. 일~토 -> 0~6으로 반환
  let day = date.getDay();

  // dayWeek의 [i]번째 인덱스를 리턴함
  console.log(dayWeek[day]);
  return dayWeek[day];
}

solution(5, 24);
