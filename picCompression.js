const chalk = require('chalk');
const fs = require('fs')
const URL="https://api.tinify.com/shrink"
const path = require('path') 
var FormData = require('form-data');
const axios = require('axios')


let srcPath;
let tsrPath;

function commandCapture(){
  const argv = process.argv
  argv.splice(0,2)
  if(argv.length < 2){
    console.log(chalk.red('srcPath and tarPath is both required !'))
  }else{
    srcPath = argv[0]
    tsrPath = argv[1]
    if(!isExist(srcPath)){
      console.log(chalk.red('can\'t find '+ srcPath+'!'))
    }else{
      if(isDir(srcPath)){
        console.log('文件夹')
      }else{
        file = fs.readFileSync(srcPath);
        console.log('file')
        console.log(file)
        var param = new FormData() // 创建form对象
        param.append('file', file, file.name)
        axios.post(URL,{
          "source": {
            "url": "https://tinypng.com/images/panda-happy.png"
          }
        },{
            "Authorization": "Basic g0eKUPXX2NBHr9DeNlv7J06BV8S9EpTU"
            // "Authorization": "Basic YXBpOmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1"

        })
        .then(res=>{
          console.log("res")
          console.log(res)
        })
        .catch(error=>{
          console.log("error")
          console.log(error)
        })
      }
    }
  }
}
function isExist(path){
  return fs.existsSync(path)
}
function isDir(spath){
  return path.extname(spath) === ''
}
function compress(file){

}
module.exports = {commandCapture}