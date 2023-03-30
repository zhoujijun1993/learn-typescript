import { IQueue } from "./IQueue"

class ArrayQueue<T> implements IQueue<T> {
  // 内部时通过数组保存
  private data: T[] = []

  // 入队
  enqueue(element: T) {
    this.data.push(element)
  }

  // 出队
  dequeue(): T | undefined {
    return this.data.shift()
  }

  // 返回队列第一个元素
  peek(): T | undefined {
    return this.data[0]
  }

  //队列是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 队列元素个数
  size(): number {
    return this.data.length
  }

}

export default ArrayQueue
