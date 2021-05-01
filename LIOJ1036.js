var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
   solve(lines)
})

function solve (lines) {
    let n = lines[0]
    let numbers = []
    for (let i = 0; i < n; i++) {
        numbers.push(Number(lines[i+1]))
    }
    console.log(reverse(numbers))
}

// LIOJ 1036：Array reverse
function reverse(arr) {
    let res = ''
    for(let i = arr.length-1; i >= 0; i--) {
        res += String(arr[i]) + '\n'
    }

    return res
}