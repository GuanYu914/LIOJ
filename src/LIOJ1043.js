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
  const str = lines[0]
  const target = lines[1]
  console.log(endsWith(str, target))
}

// LIOJ 1043：String endsWith
function endsWith (str, searchString) {
  let i = str.length
  let j = searchString.length
  // console.log(i)
  // console.log(j)
  let unMatchFlag = false
  while (i !== 0 && j !== 0) { // 從最後面開始同時比較
    // console.log(str[i-1])
    // console.log(searchString[j-1])
    if (str[i - 1] === searchString[j - 1]) { // 如果相同，則往前一位比較，跳過此迴圈
      i--
      j--
      continue
    } else {
      unMatchFlag = true // 如果沒有設置停止 flag，終止迴圈
      break
    }
  }
  if (!unMatchFlag) { // 若沒有收到停止 flag，則印出完全匹配
    return true
  } else {
    return false
  }
}
