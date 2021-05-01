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
    let str = lines[0]
    let start = lines[1]
    let end = lines[2]

    console.log(slice(str, start, end));
}

// LIOJ 1045：String slice
function slice(str, beginIndex, endIndex) {
    let res = ''

    for (let i = beginIndex; i < endIndex; i++) {
        res += str[i]
    }
    return res
}