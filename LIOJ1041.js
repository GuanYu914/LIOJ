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
    console.log(trim(lines[0]))
}

// LIOJ 1041：String trim
function trim(str) {
    let indexStart = -1
    let indexEnd = -1

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (str[i] !== ' ') {
            indexStart = i
            break
        }
    }

    for (let i = str.length-1; i >= 0; i--) {
        // console.log(str[i])
        if (str[i] !== ' ') {
            indexEnd = i
            break
        }
    }
    // console.log('start', indexStart)
    // console.log('end', indexEnd)
    let res = ''
    if (!(indexStart === -1 || indexEnd === -1)){
        // console.log('enter display')
        for (let i = indexStart; i <= indexEnd; i++) {
            res += str[i]
        }
    }

    return res
}