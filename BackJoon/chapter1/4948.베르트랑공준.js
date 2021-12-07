/* 문제
베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.

이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.

예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)

자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오. 
*/

// let fs = require("fs");
// let inputs = fs.readSync("/dev/stdin").toString().trim().split("\n");
// local
const inputs = [1, 10, 13, 100, 1000, 10000, 1000000, 0];

for (let i = 0; i < inputs.length; i++) {
  let input = Number(inputs[i]);
  if (input === 0) {
    break;
  }

  let input2 = input * 2;

  let isPrimeNumber = Array(input2 + 1).fill(true);
  isPrimeNumber[0] = isPrimeNumber[1] = false; // 0, 1 은 소수가 아니다.

  function PrimeNumber() {
    for (let i = 2; i <= Math.ceil(Math.sqrt(input2)); i++) {
      if (isPrimeNumber[i]) {
        let m = 2;
        while (i * m <= input2) {
          isPrimeNumber[i * m] = false;
          m++;
        }
      }
    }
    let results = [];

    for (let i = input + 1; i <= input2; i++) {
      if (isPrimeNumber[i]) {
        results.push(i);
      }
    }
    console.log(results.length);
  }

  PrimeNumber();
}
