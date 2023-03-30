// 创建Node节点类
class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

// 创建LinkedList的类
class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  // 封装私有方法
  // 根据position获取到当前的节点（不是节点的value，而是获取节点）
  private getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while(index++ < position && current) {
      current = current.next
    }
    return current
  }

  // 追加节点
  append(value: T) {
    // 1.根据value创建一个新节点
    const newNode = new Node(value)

    // 2. 判断this.head 是否为null
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      // current 肯定指向最后一个节点的
      current.next = newNode
    }

    // size++
    this.size++
  }

  // 遍历链表的方法
  traverse() {
    const values: T[] = []
    let current = this.head
    while(current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join('->'))
  }

  // 插入方法
  insert(value: T, position: number): boolean {
    // if (position < 0 || position > this.size) {
    //   throw new Error(`传入的${position}越界了，请检查`)
    // }

    // 越界的判断
    if(position < 0 || position > this.size) return false

    // 2.根据value创建新的节点
    const newNode = new Node(value)

    // 3. 判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {

      const previous = this.getNode(position - 1)
      newNode.next = previous!.next
      previous!.next = newNode

      // let current = this.head
      // let previous: Node<T> | null = null
      // let index = 0
      // while(index++ < position && current) {
      //   previous = current
      //   current = current.next
      // }
      // // index === position
      // newNode.next = current
      // previous!.next = newNode
    }
    this.size++
    return true
  }

  // 删除方法
  removeAt(position: number): T | null {
    // 1.越界的判断
    if (position < 0 || position >= this.size) return null

    // 2.判断是否是删除第一个节点
    let current = this.head
    if (position === 0) {
      this.head = current!.next
    } else {
      // let previous: Node<T> | null = null
      // let index = 0
      // while(index++ < position && current) {
      //   previous = current
      //   current = current.next
      // }

      // 找到需要的节点
      // previous!.next = current?.next ?? null

      // 重构成如下代码
      const previous = this.getNode(position - 1)
      previous!.next = previous?.next?.next ?? null
    }

    this.size--

    return current?.value ?? null
  }

  // 获取方法
  get(position: number): T | null {
    // 越界问题
    if (position < 0 || position >= this.size) return null

    // 查找元素，并且范围元素
    return this.getNode(position)?.value ?? null
    // let index = 0
    // let current = this.head
    // while(index++ < position && current) {
    //   current = current.next
    // }

    // // index === position
    // return current?.value ?? null
  }

  // 更新方法
  update(value: T, position: number) {
    if (position < 0 || position >= this.size) return false

    // 获取对应位置的节点，直接更新即可
    const currentNode = this.getNode(position)
    currentNode!.value = value

    return true
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')

linkedList.insert('abc', 0)
linkedList.traverse()
linkedList.insert('cba', 2)
linkedList.insert('nba', 6)
linkedList.traverse()

// 测试删除节点
linkedList.removeAt(0)
linkedList.removeAt(0)
linkedList.traverse()

linkedList.removeAt(2)
linkedList.traverse()

linkedList.removeAt(3)
linkedList.traverse()

console.log('------测试get----------')
console.log(linkedList.get(0))
console.log(linkedList.get(1))
console.log(linkedList.get(2))

console.log('------测试update----------')
linkedList.update('why', 1)
linkedList.update('kobe', 1)
linkedList.traverse()


export {}
