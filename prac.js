


// arguments--------------------------------------------------------
// function a () {  // () 안에 parameter가 주어지지 않았지만 !
//   console.log('a 메서드가 호출되었습니다.');
//   console.log(arguments)
//   let argv = Array.prototype.slice.call(arguments)  //call메서드를 통해서 !
//   console.log('a 메서드가 종료되었습니다.');
// }


// a(1,2,3);  // Arguement를 전달할 수있습니다.

//NodeList---------------------------------------------------------

// document.body.innerHTML ='<div>1번째</div><div>2번째</div><div>3번째</div>';
// let NodeList = document.querySelectorAll('div');
// let nodeArr = Array.prototype.slice.call(NodeList);
// nodeArr.forEach((node, index , array) => {
//   console.log(node, index, array);

// }); 

// ---------------------------------------------------------
// const numbers = [10, 20, 30, 40, 50];
// const max = Math.max(...numbers);
// const min = Math.min(...numbers);
// console.log(max , min);

// ---------------------------------------------------------

// let func = function (a, b, c, d) {
//   console.log(this , a, b, c, d);
// };

// func(1,2,3,4);

console.log(0);
setTimeout(function(){
  console.log('hello');
}, 0);
console.log(1);



  

  
