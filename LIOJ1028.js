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
    var input = lines[0].split(' ')
    var data = ''
    for (let i = 0; i < input.length; i++) {
       data += input[i].toString() 
    }
    console.log(add(data))
}

function add (num) { // 當傳進來的數字為個位數字，及回傳生命靈數
    if (num.length === 1) {
        return num
    } else {
        let sum = 0
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i])
        }
        return add(sum.toString())
    }
    
}