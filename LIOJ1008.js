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
    let n = Number(lines)
    let tmp // 儲存每一次計算的結果
    let bucket = [] 

    while(n != 0) { // 剩餘的大小不等於 0 ，代表還需要水桶
        tmp = Math.pow(2, Math.floor(Math.log2(n))) // 將數值取 Log2 得到最大需要多大的籃子
        bucket.push(tmp)
        n -= tmp // 減去最大籃子後
        // console.log(n)
    }
    console.log(bucket.length); // 輸出水桶有幾個
    
}