import { IStack } from "./IStack"

// 封装一个栈
class ArrayStack<T = any> implements IStack<T> { // 不传，默认类型为any类型
  // 定义一个数组/链表，用于存储元素
  private data: T[] = []

  // 实现栈中相关的操作方法

  // push 方法：将一个元素压入到栈中
  push(element: T) {
    this.data.push(element)
  }

  // pop方法：将站定的元素弹出栈（返回出去，并且从栈顶移除掉）
  pop(): T | undefined {
    return this.data.pop()
  }

  // peek方法：看一眼栈顶元素，但是不进行任何操作
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  // isEmpty：判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 返回栈的数据个数
  size(): number {
    return this.data.length
  }
}


// // 创建 Stack 的实例
// const stack1 = new ArrayStack<string>()
// stack1.push('aaa')
// stack1.push('bbb')
// stack1.push('ccc')

// console.log(stack1.peek())
// console.log(stack1.pop())
// console.log(stack1.pop())
// console.log(stack1.pop())

// console.log(stack1.isEmpty())
// console.log(stack1.size())

// const stack2 = new ArrayStack<number>()
// stack2.push(2)
// stack2.push(3)

export default ArrayStack
