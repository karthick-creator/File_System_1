const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'sample2.txt'),'utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data)
});
fs.writeFile(path.join(__dirname,'sample2.txt'),'\n node js is the js framework',
(err)=>{
    if (err) throw err;
    console.log("write complete")
    fs.appendFile(path.join(__dirname,'sample2.txt'),'\n so learn it',
    (err)=>{
        if (err) throw err;
        console.log("append complete")
    });
    fs.rename(path.join(__dirname,'sample2.txt'), path.join(__dirname,'rename.txt'),
    (err) => {
		if (err) throw err;
		console.log("rename complete");	
	});
});

//exit on uncaught errors
process.on('uncaughtException',err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})
