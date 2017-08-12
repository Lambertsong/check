/**
 * Created by Administrator on 2017/8/12.
 */
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
module.exports = function (dir,filterStr,callback) {
    fs.readdir(dir,function (err,list) {
        if(err){
            return callback(err);
        }
        list = list.filter(function (file) {
            return path.extname(file) == '.' + filterStr;
        });
        callback(null,list);
    })
}