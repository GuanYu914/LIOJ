/* eslint-disable no-multi-spaces */
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
  const sets = lines[0]
  let info = []
  for (let i = 0; i < sets; i++) {
    info = lines[i + 1].split(' ')
    console.log(isWin(info[0], info[1], info[2]))
  }
}

function isWin (a, b, cond) {
  if (a === b) { return 'DRAW' }
  if (Number(cond) === 1) {   // 找較大者
    if (a.length !== b.length) {
      return a.length > b.length ? 'A' : 'B'
    }
    return a > b ? 'A' : 'B'
  }

  if (Number(cond) === -1) {  // 找較小者
    if (a.length !== b.length) {
      return a.length < b.length ? 'A' : 'B'
    }
    return a < b ? 'A' : 'B'
  }
}
