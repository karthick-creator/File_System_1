const fs = require('fs')
const path = require('path')

console.log(__dirname);
console.log(__filename);

fs.readFile(path.join(__dirname,'sample.txt'),'utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data)
});
fs.writeFile(path.join(__dirname,'sample.txt'),'\n node js is the js framework',
(err)=>{
    if (err) throw err;
    console.log("write complete")
});
fs.appendFile(path.join(__dirname,'sample.txt'),'\n so learn it',
(err)=>{
    if (err) throw err;
    console.log("append complete")
});

fs.appendFile(path.join(__dirname,'sample2.txt'),'\n so learn it',
(err)=>{
    if (err) throw err;
    console.log("append complete")
});
//exit on uncaught errors
process.on('uncaughtException',err => {
    console.error(`There was an uncaught error: $(err)`)
    process.exit(1)
})