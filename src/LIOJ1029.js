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
  console.log(solve(lines))
})

function solve (lines) {
  const input = lines[0].split(' ')

  switch (input[1]) {
    case '+':
      return Number(input[0]) + Number(input[2])
    case '-':
      return input[0] - input[2]
    case '*':
      return input[0] * input[2]
    case '/':
      return input[0] / input[2]
    default:
      return -1
  }
}
