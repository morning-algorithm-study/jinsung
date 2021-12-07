/* 문제
땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.

달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 

또, 정상에 올라간 후에는 미끄러지지 않는다.

달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.
*/

/* 입력 
첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다. (1 ≤ B < A ≤ V ≤ 1,000,000,000)
*/

/* 출력 
첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.
*/

// 높이 V미터 나무
// 낮에는 A미터 올라감
// 밤에 B미터 미끄러진다

const a = 100;
const b = 99;
const v = 1000000000;
let goal = 0;
let days = 0;

while (true) {
  days++;
  goal += a;
  if (goal >= v) {
    break;
  }
  goal -= b;
}
console.log(days);

/* 시간초과 후 solution */
const [A, B, V] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ");

console.log(Math.ceil((V - B) / (A - B)));

// Math.ceil을써서 딱 안떨어질경우 하루를 더함
//Math.ceil(정상 도착시 마지막 밤 필요 X) / (아침이동 - 밤미끄러지는 수)
