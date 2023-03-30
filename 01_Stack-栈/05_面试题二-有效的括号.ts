import ArrayStack from "./02_实现栈结构Stack(重构)"

function isValid(s: string): boolean  {
  if (s.length % 2 !== 0) return false
  const stack = new ArrayStack<string>()

  // 遍历s中所有的括号
  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    switch (c) {
      case '(':
        stack.push(')')
        break
      case '{':
        stack.push('}')
        break
      case '[':
        stack.push(']')
        break
      default:
        if (c !== stack.pop()) return false
        break
    }
  }

  return stack.isEmpty()
}


console.log(isValid('()'))
console.log(isValid('(){}[]'))
console.log(isValid('({)}[]'))
