var fs=require('fs')

var saludo= fs.readFileSync(__dirname+ "/greet.txt", "utf8")

console.log(saludo)