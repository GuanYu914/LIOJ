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
    var N = Number(input[0])
    var M = Number(input[1])

    var dataArr = []
    for (var i = 0; i < N; i++) {
        dataArr[i] = lines[1+i]
    }

    var searchArr = []
    for(var i = 0; i < M; i++) {
        searchArr[i] = lines[N+1+i]
    }
    var res = ''

    // use fast solution
    for (var i = 0; i < M; i++) {
        res += BinSearch(dataArr, Number(searchArr[i]), 0, dataArr.length-1) + '\n'
    }
    
    console.log(res)
}
// 基於已經排序好的陣列，使用二元搜尋可以有效增加效率
function BinSearch (arr, n, low, high) {
    var mid 

    if (high >= low) {
        mid = Math.ceil((high + low) / 2) // 將每一次中間 index 無條件進位

        if(n > Number(arr[mid])) {
            return BinSearch(arr, n, mid+1, high) // 當搜尋的數值大於中間值，改成搜尋中間右半邊部分
        } else if (n < Number(arr[mid])) {
            return BinSearch(arr, n, low, mid-1)  // 當搜尋的數值小於中間值，改成搜尋中間左半邊部分
        } else if (n === Number(arr[mid])){  // 賓果，直接回傳 index
            return mid
        } 
    } else {
        return -1
    }
}
// 直覺式解法，但是時間複雜度高，不快
function SerialSearch (arr, n) {
    for(var i = 0; i < arr.length; i++) {
        if (Number(arr[i]) === n) {
            return i
        }
    }
      return -1
}