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
    tree(lines[0])
}

function tree (n) {
    var tmp = ''
  
    // 印出數的上半部
    for (var x = 0; x < n; x++) {
      tmp = ''
      for (var i = 0; i < (n-1)-x; i++) {
        tmp += ' '
      }
      for (var j = 0; j < (2*x+1); j++) {
        tmp += '*'
      }
      console.log(tmp)
    }  
  
    // 印出數的下半部
    for (var x = 0; x < n-1; x++) {
      tmp = ''
      for (var i = 0; i < n-1; i++) {
        tmp += ' '
      }
      if(n > 1) {
        tmp += '|'
      }
      console.log(tmp)
    }  
}