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
  const tmp = lines[0]
  const card = []
  for (let i = 0; i < lines[0].length; i++) {
    if (tmp[i] !== '-') {
      card.push(Number(tmp[i]))
    }
  }
  // console.log(card)
  // 計算奇數位加總，加總到倒數後一位
  let sum = 0
  for (let i = 0; i < card.length; i += 2) {
    // console.log(i)
    if ((2 * card[i]) >= 10) {
      sum += 2 * card[i] - 9
    } else {
      sum += 2 * card[i]
    }
  }
  // 計算偶數位加總，加總到倒數後一位
  for (let i = 1; i < card.length - 1; i += 2) {
    // console.log(i)
    sum += Number(card[i])
  }

  const checkSum = sum % 10 === 0 ? 0 : 10 - sum % 10

  // console.log(checkSum)

  if (card[15] === checkSum) {
    // console.log('a')
    if (card[0] === 4) {
      return 'VISA'
    }
    if (card[0] === 5) {
      return 'MASTER_CARD'
    }
  } else {
    return 'INVALID'
  }
}
