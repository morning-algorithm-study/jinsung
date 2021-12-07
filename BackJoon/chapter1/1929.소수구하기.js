/* 문제
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
*/

//let fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v => parseInt(v));
const input = [3, 10]; // local

let isPrimeNumber = Array(input[1] + 1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;

for (let i = 2; i < Math.ceil(Math.sqrt(input[1])); i++) {
  if (isPrimeNumber[i]) {
    let m = 2; // n의 배수씩 제거해 가자
    while (i * m <= input[1]) {
      isPrimeNumber[i * m] = false;
      m++;
    }
  }
}
let result = [];
for (let i = input[0]; i <= input[1]; i++) {
  if (isPrimeNumber[i]) {
    console.log(i);
  }
}

// solution2
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = Number(inputs[0]);
var b = Number(inputs[1]);
var arr = [];
var answer = "";
for (var i = 0; i <= b; i++) {
  arr.push(true);
}
arr[0] = false;
arr[1] = false;

for (var m = 2; m <= b; m++) {
  if (arr[m]) {
    for (var n = 2; n <= b / m; n++) {
      arr[m * n] = false;
    }
  }
}
for (var j = a; j <= b; j++) {
  if (arr[j]) answer += j + "\n";
}
console.log(answer.trim());
