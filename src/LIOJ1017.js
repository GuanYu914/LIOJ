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

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve (lines) {
  const C = lines[0]
  const N = lines[1]
  const data = []
  let max = 0
  let sum = 0

  // 根據題目輸入，將物品清單獨立出來
  for (let i = 0; i < N; i++) {
    data[i] = Number(lines[2 + i])
  }

  // 每次取目前物品清單最大值，並一直到小偷可以帶走的物品數
  for (let j = 0; j < C; j++) {
    max = 0 // 初始化 max，開始比大小
    for (let i = 0; i < data.length; i++) {
      if (data[i] > max) {
        max = data[i]
      }
    }
    sum += Number(max) // 將目前最大值加入到總和裡
    data.splice(data.indexOf(max), 1) // 將目前陣列最大數值刪除，並重新搜尋
  }
  console.log(sum)
}
