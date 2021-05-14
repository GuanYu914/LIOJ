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
  let cnt = 0

  /*
   * 一個一個慢慢數的方式計算結果
   * 用來檢驗快速版本的結果一否一致
   */
  /*
  for (let i = 1; i <= n; i++) {
      if (isContain9(i)) { // 如果數字中有 9 則跳過
          continue
      } else {
          cnt++
      }
  }
  console.log(`一個一個慢慢數結果: ${cnt}`)
  */

  /**
   * 快速版: 利用規律
   * 1 - 10  : 有 9 個符合
   * 1 - 100 : 有 81 個符合
   * 1 - 1000: 有 729 個符合
   * ...
   * 以此類推
   *
   * 得出結論:
   * 如果數字為 12345
   * [1]2345 => 1 * 9^4
   * 1[2]345 => 2 * 9^3
   * 12[3]45 => 3 * 9^2
   * 123[4]5 => 4 * 9^1
   * 1234[5] => 8 * 9^0
   */
  cnt = 0
  const str = n.toString()
  for (let i = 0; i < str.length; i++) {
    cnt += Number(str[i]) * Math.pow(9, str.length - 1 - i)
  }
  console.log(cnt)
  // console.log(`找規律版結果: ${cnt}`);
}

// eslint-disable-next-line no-unused-vars
function isContain9 (num) { // 將數字轉成字串，判斷數字中是否有 9
  num = num.toString()

  for (let i = 0; i < num.length; i++) {
    if (num[i] === '9') {
      return true
    }
  }
  return false
}
