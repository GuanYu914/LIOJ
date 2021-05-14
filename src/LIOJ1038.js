const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
})

// 輸入結束，開始針對 lines 做處理
rl.on('close', function () {
  solve(lines)
})

function solve (lines) {
  const targetFind = Number(lines[0])
  const n = lines[1]
  const numbers = []

  for (let i = 0; i < n; i++) {
    numbers[i] = Number(lines[2 + i])
  }
  console.log(indexOf(numbers, targetFind))
}

// LIOJ 1038：Array indexOf
function indexOf (arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return i
    }
  }
  return -1
}
