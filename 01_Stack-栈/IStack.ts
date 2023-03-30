import IList from "../types/IList"

// 定义栈的结构接口
export interface IStack<T> extends IList<T> {
  push(element: T): void
  pop(): T | undefined
  // peek(): T | undefined
  // isEmpty(): boolean
  // size(): number
}