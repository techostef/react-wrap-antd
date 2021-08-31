var path = require('path'), fs=require('fs');

function fromDir(startPath, filter = [], result = [], exclude){
    if (!fs.existsSync(startPath)){
        return;
    }

    const files=fs.readdirSync(startPath);

    for(let i=0;i<files.length;i++){
        const filename=path.join(startPath,files[i]);
        const stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            let isExclude = false;
            for(let j = 0; j < exclude.length; j++) {
                let item = exclude[j];
                if (filename.indexOf(item)>=0) {
                    isExclude = true;
                    break;
                };
            }
            if (!isExclude) {
                fromDir(filename, filter, result, exclude); //recurse
            }
        }
        for(let j=0; j<filter.length; j++) {
            let item = filter[j];
            if (filename.indexOf(item)>=0) {
                result.push(filename);
                break
            };
        }
        // else if (filename.indexOf(filter)>=0) {
        //     result.push(filename);
        // };
    };
};

const dstTarget = "dist"
const srcTarget = "src"
const extention = [".scss", ".css"]
const exclude = ["stories"];

let result = [];
fromDir(srcTarget, extention, result, exclude);
result.forEach((item) => {
    const srcPath = item;
    const dstPath = item.replace(srcTarget, dstTarget)
    dstPath.split('\\').slice(0,-1).reduce( (last, folder)=>{
        let folderPath = last ? (last + '/' + folder) : folder
        if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath)
        return folderPath
    },'');
    fs.copyFileSync(srcPath, dstPath);
})