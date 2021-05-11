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
    let str = lines[0].toString()
    let res = ''   
    for (let i = str.length-1; i >= 0; i--) {
        res += str[i]
    }
    console.log(res)
}