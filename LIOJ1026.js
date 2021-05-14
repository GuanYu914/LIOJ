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
  const n = lines[0]
  // if (n === 2) return 'Yes'
  const input = lines[1].split(' ')
  let d, tmp

  // 假定公比
  if (Number.isFinite(Number(input[1]) / Number(input[0]))) {
    d = Number(input[1]) / Number(input[0])
  } else {
    return 'No'
  }

  for (let i = 2; i < n; i++) {
    if (Number.isFinite(Number(input[i]) / Number(input[i - 1]))) {
      tmp = Number(input[i]) / Number(input[i - 1])
      if (tmp !== d) {
        return 'No'
      }
      d = tmp
    } else {
      return 'No'
    }
  }
  return 'Yes'
}
