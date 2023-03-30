import ArrayQueue from "./01_实现队列结构Queue";

function lastRemaining(n: number, m: number): number {
  if (n === 0) return 0
  if (n === 1) return 1
  const queue = new ArrayQueue<number>()
  for(let i = 0; i < n; i++) {
    queue.enqueue(i)
  }
  while(queue.size() > 1) {
    for (let i = 1; i < m; i++) {
      const j = queue.dequeue()
      queue.enqueue(j!)
    }
    queue.dequeue()
  }
  return queue.dequeue()!
}

console.log(lastRemaining(5,3))
console.log(lastRemaining(10, 17))