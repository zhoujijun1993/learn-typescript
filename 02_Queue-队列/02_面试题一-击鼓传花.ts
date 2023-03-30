import ArrayQueue from "./01_实现队列结构Queue"

function hotPotato(names: string[], num: number): string {
  if (names.length === 0) return '队列为空，请增加数据'
  if (names.length === 1) return names[0]
  const queue = new ArrayQueue<string>()
  // 将所有name入队操作
  for (const name of names) {
    queue.enqueue(name)
  }
  
  // 淘汰的规则
  // 1-(num-1) 不淘汰
  while (queue.size() > 1) {
    for(let i = 1; i < num; i++) {
      const name = queue.dequeue()
      queue.enqueue(name!)
    }
    // num淘汰
    queue.dequeue()
  }

  return queue.dequeue()!
}

const lastName = hotPotato(["why", "james", "kobe", "curry"], 3)
console.log(lastName)
