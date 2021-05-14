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
  const targetDel = Number(lines[0])
  const n = lines[1]
  const numbers = []

  for (let i = 0; i < n; i++) {
    numbers[i] = Number(lines[2 + i])
  }
  filter(numbers, targetDel, arrDel)
}

// LIOJ 1037：Array filter
// 這題 callback 會是一個 function，但難度會比較高
// 若是做不出來，也可以調整參數
function filter (arr, target, callback) {
  const res = callback(arr, target)
  if (res.length) { // 當刪除完的陣列有元素再輸出
    for (let i = 0; i < res.length; i++) {
      console.log(res[i])
    }
  }
}

function arrDel (arr, target) {
  if (!(indexOf(arr, target))) { // 陣列中搜尋不到，代表沒有東西要刪了
    return arr
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        for (let j = i; j < arr.length - 1; j++) { // 將剩餘的陣列往左對其
          arr[j] = arr[j + 1]
        }
        arr.pop() // 將陣列大小 -1
      }
    }
    return arrDel(arr, target)
  }
}

function indexOf (arr, target) { // 找陣列元素
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true
    }
  }
  return false
}
