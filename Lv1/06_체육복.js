/* 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

 * 제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 
남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];
const solution = (n, lost, reserve) => {
  let hasArr = [];

  /* total */
  for (let i = 0; i < n; i++) {
    hasArr[i] = 1;
  }
  /* 도난 */
  for (let i = 0; i < lost.length; i++) {
    hasArr[lost[i] - 1] = 0;
  }
  /* 여벌 추가 */
  for (let i = 0; i < reserve.length; i++) {
    hasArr[reserve[i] - 1] += 1;
  }
  /* 체육복 빌려줘 */
  for (let i = 0; i < n; i++) {
    // i 체육복 없는 친구 , 앞 뒤 친구한테 빌려보자
    if (hasArr[i] === 0 && hasArr[i - 1] === 2) {
      hasArr[i - 1] = 1;
      hasArr[i] = 1;
    } else if (hasArr[i] === 0 && hasArr[i + 1] === 2) {
      hasArr[i] = 1;
      hasArr[i + 1] = 1;
    }
  }
  // 강당갈 수 있는 친구들
  const answer = hasArr.filter((v) => v > 0);
  return answer.length;
};

console.log(solution(n, lost, reserve));
