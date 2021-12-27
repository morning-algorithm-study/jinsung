/* 문제
널리 잘 알려진 자료구조 중 최소 힙이 있다. 최소 힙을 이용하여 다음과 같은 연산을 지원하는 프로그램을 작성하시오.

배열에 자연수 x를 넣는다.
배열에서 가장 작은 값을 출력하고, 그 값을 배열에서 제거한다.
프로그램은 처음에 비어있는 배열에서 시작하게 된다.
*/

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(data) {
    this.heap.push(data);

    this.heapifyUp();
  }

  delete() {
    const data = this.heap[0];

    if (this.heap.length > 1) {
      // Swap
      const last = this.heap.length - 1;
      this.heap[0] = this.heap[last];
      this.heap.pop();

      this.heapifyDown();
    } else {
      this.heap.pop();
    }

    return data;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    const currentData = this.heap[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentData = this.heap[parentIndex];

      // 부모 값보다 클 경우 종료
      if (currentData >= parentData) break;

      // Swap
      this.heap[currentIndex] = parentData;
      currentIndex = parentIndex;
    }

    // 적당한 위치
    this.heap[currentIndex] = currentData;
  }

  heapifyDown() {
    let currentIndex = 0;
    const currentData = this.heap[currentIndex];

    while (currentIndex < this.heap.length) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;

      // 자식 노드가 존재하지 않음
      if (leftChildIndex >= this.heap.length) break;

      const leftChildData = this.heap[leftChildIndex];
      const rightChildData =
        rightChildIndex < this.heap.length ? this.heap[rightChildIndex] : null;

      const smallerIndex =
        rightChildData !== null && rightChildData < leftChildData
          ? rightChildIndex
          : leftChildIndex;
      const smallerData = this.heap[smallerIndex];

      if (currentData <= smallerData) break;

      this.heap[currentIndex] = smallerData;
      currentIndex = smallerIndex;
    }

    // 알맞은 위치
    this.heap[currentIndex] = currentData;
  }
}

// 문제 풀이
const n = +input[0];

const minHeap = new MinHeap();
const log = [];
for (let i = 1; i <= n; i++) {
  const x = +input[i];
  if (x > 0) {
    minHeap.insert(x);
  } else if (minHeap.isEmpty()) {
    log.push(0);
  } else {
    log.push(minHeap.delete());
  }
}

console.log(log.join("\n"));