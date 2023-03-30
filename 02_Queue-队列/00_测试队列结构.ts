import ArrayQueue from "./01_实现队列结构Queue";

const queue = new ArrayQueue<string>()

queue.enqueue('abc')
queue.enqueue('nba')
queue.enqueue('cba')

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.peek())
console.log(queue.isEmpty())
console.log(queue.size())
