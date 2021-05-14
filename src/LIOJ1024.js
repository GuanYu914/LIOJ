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
  const N = lines[0]
  const M = lines[1]
  let res = ''

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      // 字串拼接產生符合格式的輸出
      res += i.toString() + '*' + j.toString() + '=' + (i * j).toString() + '\n'
    }
  }
  console.log(res)
}
