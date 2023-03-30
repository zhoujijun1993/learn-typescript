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
      let current = this.head
      let previous: Node<T> | null = null
      let index = 0
      while(index++ < position && current) {
        previous = current
        current = current.next
      }
      // index === position
      newNode.next = current
      previous!.next = newNode
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
      let previous: Node<T> | null = null
      let index = 0
      while(index++ < position && current) {
        previous = current
        current = current.next
      }

      // 找到需要的节点
      previous!.next = current?.next ?? null
    }

    this.size--

    return current?.value ?? null
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


export {}
