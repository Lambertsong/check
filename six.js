/**
 * Created by Administrator on 2017/8/12.
 */
var mymodule = require('./mymodule.js')
var dir =process.argv[2];
var filter = process.argv[3];
mymodule(dir,filter,function (err,list) {
    if (err){
        return console.error('Error',err);
    }
    list.forEach(function (file) {
        console.log(file)
    })
})