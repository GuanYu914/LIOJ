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
  const shiftValue = lines[0]
  const str = lines[1]

  let res = ''
  let tmpCode = 0
  for (let i = 0; i < str.length; i++) {
    tmpCode = isOutOfBound(Number(str.charCodeAt(i)) + Number(shiftValue))
    // console.log(typeof tmpCode)
    res += String.fromCharCode(tmpCode)
    // console.log('tmp res: ', res)
  }
  console.log(res)
}

/**
 *  小寫範圍 a - z : 97 - 122
 */

function isOutOfBound (n) {
  if (n <= 122 && n >= 97) {
    // console.log('yes n: ', n)
    return n
  }
  return isOutOfBound(n - 123 + 97)
}
