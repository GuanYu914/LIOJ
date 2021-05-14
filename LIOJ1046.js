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
  const game = []
  for (let i = 0; i < 3; i++) {
    game.push(lines[i].split(''))
  }
  console.log(winner(game))
}

function winner (game) {
  // 列出所有 WIN 的條件
  // 找橫列是否為一直線
  for (let i = 0; i < 3; i++) {
    if (game[i][0] === game[i][1] && game[i][1] === game[i][2]) {
      return game[i][0]
    }
  }

  // 找直列是否為一直線
  for (let i = 0; i < 3; i++) {
    if (game[0][i] === game[1][i] && game[1][i] === game[2][i]) {
      return game[0][i]
    }
  }

  // 找斜線是否為一直線
  if (game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
    return game[0][0]
  }

  if (game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
    return game[0][2]
  }

  return 'DRAW'
}
