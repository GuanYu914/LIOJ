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
    let expectedLength = Number(lines[1])
    let padStr = lines[2]

    console.log(padEnd(str, expectedLength, padStr))
}

// LIOJ 1044：String padEnd
function padEnd(str, targetLength, padString) {
    let res = str
    let tmpPad = ''
    if (targetLength > str.length) {
        for (let i = 0; i < targetLength - str.length; i++) {
            tmpPad += padString[i % padString.length] // 使用 mod 達到字串循環的效果
        }
        res += tmpPad
    }
    return res
}