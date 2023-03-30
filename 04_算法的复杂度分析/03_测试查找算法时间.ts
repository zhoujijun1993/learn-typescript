import { sequentSearch } from "./01_查找算法-顺序查找";
import { binarySearch } from "./02_查找算法-二分查找";

const MAX_LENGTH = 1000000
const nums = new Array(MAX_LENGTH).fill(0).map((_, index) => index)
const num = MAX_LENGTH / 2

const startTime = performance.now()
const index = sequentSearch(nums, num)
const endTime = performance.now()
console.log('索引的位置：', index, '消耗的时间：', endTime - startTime)

const startTime2 = performance.now()
const index2 = binarySearch(nums, num)
const endTime2 = performance.now()
console.log('索引的位置：', index2, '消耗的时间：', endTime2 - startTime2)
