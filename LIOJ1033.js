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
    var dots = []
    var res = []
    
    // 將所有點的資訊儲存
    for (let i = 1; i < lines.length; i++) {
        let tmp = lines[i].split(' ')
        dots.push({
            x: Number(tmp[0]),
            y: Number(tmp[1]),
        })
    }
    // console.log('dots', dots)
    // 開始計算每個組合的距離
    for (let i = 0; i < dots.length; i++) {
        for (let j = i+1; j < dots.length; j++) {
            res.push({
                x1: dots[i].x,
                y1: dots[i].y,
                x2: dots[j].x,
                y2: dots[j].y,
                dist: dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y)
            })
        }        
    }
    // 找最小距離
    var min = Infinity
    for (let i = 0; i < res.length; i++) {
        if (res[i].dist < min) {
            min = res[i].dist 
        }
    }
    // console.log('res: ', res)
    // console.log('min: ', min)

    var output = []
    for (let i =0; i < res.length; i++) {
        if(res[i].dist === min) { // 搜尋組合為最小距離，並找到第一個
            dis(res, i)
            break;
        }
    }
}

function dis (dots, index) {
    if(dots[index].x1 < dots[index].x2) 
    {
        console.log(dots[index].x1, dots[index].y1)
        console.log(dots[index].x2, dots[index].y2)
    } else if (dots[index].x2 < dots[index].x1) 
    {
        console.log(dots[index].x2, dots[index].y2)
        console.log(dots[index].x1, dots[index].y1)
    } else 
    {
        if (dots[index].y1 < dots[index].y2) 
        {
            console.log(dots[index].x1, dots[index].y1)
            console.log(dots[index].x2, dots[index].y2)
        } else if (dots[index].y2 < dots[index].y1) 
        {
            console.log(dots[index].x2, dots[index].y2)
            console.log(dots[index].x1, dots[index].y1)
        } else { // 座標都相等
            console.log(dots[index].x2, dots[index].y2)
            console.log(dots[index].x1, dots[index].y1)
        }
    }
}

function dist (x1, y1, x2, y2) {
    var res 
    res = Math.pow(Math.pow(Math.abs(x2-x1), 2) + Math.pow(Math.abs(y2-y1), 2), 0.5)
    return res
}