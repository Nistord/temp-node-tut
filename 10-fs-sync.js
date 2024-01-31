 const {readFileSync, writeFileSync}=require('fs')
 const primul=fs.readFileSync('./continut/subfolder/first.txt','utf8')
 const secundar=fs.readFileSync('./continut/subfolder/second.txt','utf8')
console.log(primul, secundar);

writeFileSync(
    './continut/subfolder/result-sync.txt',
    `Aici regasesti rezultatul: ${primul}, ${secundar}`,
    {flag: 'a'} 
)