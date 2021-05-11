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
    let n = Number(lines[0])
    let platform = []
    // 只讀入 n 個範圍
    for (let i = 0; i < n; i++) {
        platform[i] = Number(lines[1].split(' ')[i])
    }
    // console.log(platform);
    
    let currentStep = platform[0]
    let cnt = 0
    let max = -Infinity

    for (let i = 0; i < platform.length; i++) {
        // 遇到不同的階層數字代表
        if (currentStep !== platform[i])
        {
            if (cnt > max){ // 檢查是否大於之前的最大階層數
                max = cnt
            }
            currentStep = platform[i] // 將階層數字設為目前的階層數字
            cnt = 1 // 一開始遇到就先把 counter 加一，代表出現一次
        } else { // 若沒有遇到不同的階層數字代表，則把 counter 加一
            cnt++
        }
        // 到陣列終點時，更新目前的最大值，避免最大階層出現在最後一個階層數字
        if(i === platform.length - 1) {
            if (cnt > max){
                max = cnt
            }
        }
        // console.log(cnt)
    }
    console.log(max)
}