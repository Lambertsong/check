/**
 * Created by Administrator on 2017/8/12.
 */
var express = require('express');
var five = express();
var fs = require('fs');
var path = require('path')
fs.readdir('img',function callback(err,lest) {
    for(var i=0; i<lest.length; i++){
        if(path.extname(lest[i]) == '.txt'){
            console.log(lest[i])
        }
    }
});