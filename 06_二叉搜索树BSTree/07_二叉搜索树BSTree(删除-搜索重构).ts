import { Node } from "../types/Node";

import { btPrint } from 'hy-algokit'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null

  // 当前节点的父节点
  parent: TreeNode<T> | null = null

  // 判断当前节点是父节点的左子节点
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }

  // 判断当前节点是父节点的右子节点
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }
}

class BSTree<T> {
  private root: TreeNode<T> | null = null

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) { // 去左边继续查看空白位置
      if (!node.left) { // node节点左边已经是空白
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else { // 去右边继续查看空白位置
      if (!node.right) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  print() {
    btPrint(this.root)
  }

  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null
    while (current) {
      if (current.value === value) return current

      parent = current
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }

      // 如果current有值，那么current保存自己的父节点
      if (current) current.parent = parent
    }
    return null
  }

  /** 插入的数据 */
  insert(value: T) {
    // 1. 根据传入的value创建Node节点
    const newNode = new TreeNode(value)

    // 2. 判断当前是否已经有了根节点
    if (!this.root) { // 当前树为空
      this.root = newNode
    } else { // 树中已经有其他值
      this.insertNode(this.root, newNode)
    }
  }

  /** 遍历的操作 */
  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }

  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }

  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }

  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }

  // 层序遍历
  levelOrderTraverse() {
    // 1.如果没有根节点，那么不需要遍历
    if (!this.root) return

    // 2.创建队列结构
    const queue: TreeNode<T>[] = []
    queue.push(this.root) // 第一个节点是根节点

    // 3. 遍历队列中所有的节点（依次出队）
    while(queue.length) {
      // 3.1 访问界定啊的过程
      const current = queue.shift()!
      console.log(current.value)

      // 3.2 将左子节点加入到队列
      if (current.left) {
        queue.push(current.left)
      }
      // 3.3 将右子节点加入到队列
      if (current.right) {
        queue.push(current.right)
      }
    }
  }

  /** 获取最值操作： 最大值、最小值 */
  getMaxValue(): T | null {
    let current = this.root
    while (current && current.right) {
      current = current.right
    }
    return current?.value ?? null
  }

  getMinValue(): T | null {
    let current = this.root
    while (current && current.left) {
      current = current.left
    }
    return current?.value ?? null
  }

  /**搜索特定的值 */
  search(value: T): boolean {
    return !!this.searchNode(value)
  }

  /** 实现删除操作 */
  remove(value: T): boolean {
    //１. 搜索：当前是否有这个value
    const current = this.searchNode(value)

    if (!current) return false

    // 2.获取到三个东西：当前节点/父节点/ 是属于左子节点还是右子节点
    console.log(current?.value, current?.parent?.value)

    // if (current.isLeft) { // current在父节点的左边

    // } else {}

    return true
  }
}

const bst = new BSTree<number>()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

// 打印
// bst.print()

// 先序遍历
// bst.preOrderTraverse()

// 中序遍历
// bst.inOrderTraverse()

// 后序遍历
// bst.postOrderTraverse()

// 层序遍历
// bst.levelOrderTraverse()

// 最大值
// console.log(bst.getMaxValue())
// 最小值
// console.log(bst.getMinValue())

// 搜索
// console.log(bst.search(6))
// console.log(bst.search(8))
// console.log(bst.search(25))
// console.log(bst.search(4))

// 删除
bst.remove(11)
bst.remove(15)

export {}

