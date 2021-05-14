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
  const n = Number(lines[0])
  const groupA = []
  const groupB = []
  let cntA = 0
  let cntB = 0

  for (let i = 0; i < n; i++) {
    if (lines[i + 1] === 'A') {
      cntA++
      groupA.push(i + 1)
    }
    if (lines[i + 1] === 'B') {
      cntB++
      groupB.push(i + 1)
    }
  }

  if (cntA === 0 || cntB === 0) {
    console.log('PEACE')
  } else {
    if (cntA > cntB) {
      for (let i = 0; i < groupB.length; i++) {
        console.log(groupB[i])
      }
    } else if (cntB > cntA) {
      for (let i = 0; i < groupA.length; i++) {
        console.log(groupA[i])
      }
    } else {
      console.log('PEACE')
    }
  }
}
