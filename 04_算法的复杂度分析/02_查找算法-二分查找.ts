export function binarySearch(array: number[], num: number) {
  let left = 0
  let right = array.length - 1
  // 开始查找
 while(left <= right) {
  let mid = Math.floor((left + right) / 2)
  const midNum = array[mid]
  if (midNum === num) {
    return mid
  } else if (midNum < num) {
    left = mid + 1
  } else {
    right = mid - 1
  }
 }
  return -1
}


const index = binarySearch([1, 2, 4, 10, 222, 333], 222)
console.log(index)
