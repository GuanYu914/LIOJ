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
  const n = lines[0]
  let x1, x2, y1, y2, dist
  for (let i = 0; i < n; i++) {
    x1 = lines[4 * i + 1]
    y1 = lines[4 * i + 2]
    x2 = lines[4 * i + 3]
    y2 = lines[4 * i + 4]
    dist = Math.pow(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2), 0.5)
    console.log(dist.toFixed(2))
  }
}
