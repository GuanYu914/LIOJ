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
  console.log(toLowerCase(lines[0]))
}

function toLowerCase (str) {
  let res = ''
  let tmp
  for (let i = 0; i < str.length; i++) {
    tmp = str.charCodeAt(i)
    if (tmp >= 65 && tmp <= 90) {
      res += String.fromCharCode(tmp + 32)
    } else {
      res += str[i]
    }
  }
  return res
}
