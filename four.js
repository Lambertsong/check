/**
 * Created by Administrator on 2017/8/12.
 */
var fs = require('fs')
var num =  fs.readFileSync('./tmp/text.txt')
fs.readFile('./tmp/text.txt',function (err,num) {
    if (err){
        return console.log(err);
    }
    // console.log(num.toString());
})
var str = num.toString();
var n = str.split('\n');
console.log('行数'+ n.length);