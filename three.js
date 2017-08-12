/**
 * Created by Administrator on 2017/8/12.
 */
var fs = require('fs')
var num =  fs.readFileSync('./tmp/text.txt')
var str = num.toString();
var n = str.split('\n');
console.log(n.length);