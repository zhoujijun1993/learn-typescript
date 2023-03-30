/**
 * 根据传入的数字，判断是否是一个数组
 * @param num 要判断的数字
 * @returns 是否是一个数组
 */
function isPrime(num: number): boolean {
  // O(n) => O(logn)
  const sqrt = Math.sqrt(num)
  // 质数的特点：只能被1和num整除
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

console.log(isPrime(8))
console.log(isPrime(14))
console.log(isPrime(15))
console.log(isPrime(17))
console.log(isPrime(21))

export {}