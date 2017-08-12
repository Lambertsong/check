/**
 * Created by Administrator on 2017/8/12.
 */
console.log(process.argv);
/*var num = 0;
 process.argv.forEach(function (value,index) {
 if(index >=2){
 num += Number(process.argv[index]);
 }
 })*/
var num = 0;
for (var i=2; i < process.argv.length;i++){
    num = num + Number(process.argv[i]);
}
console.log(num);