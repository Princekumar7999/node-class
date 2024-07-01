var fs = require('fs');

// var readMe = fs.readFileSync('file.txt','utf8'); // read file
// console.log(readMe);
// fs.writeFileSync('write.txt', readMe); //write file


// var rs = fs.appendFileSync('write.txt', 'class is going on');
// var read = fs.readFileSync('write.txt','utf8');
// console.log(read);
// fs.mkdir('dir1',(err)=>{
//     if(err) {
//     console.log(err);
//     }
//     console.log('dir created');
// })

// fs.rmdir('dir1',(err)=>{
//     if(err) {
//     console.log(err);
//     }
//     console.log('dir removed');
// })

// fs.rename('file.txt','new-file.txt',(err)=>{
//     if(err) {
//     console.log(err);
//     }
//     console.log('file renamed');
// })

// const p ='/home/users/node-pr/new-file.txt';
// var path = require('path');
// const dirname = path.dirname(p);
// const extension = path.extname(p);
// console.log(dirname);
// console.log(extension);

// const path = require('path');

// const p = '/home/user/node-pr/new-file.txt'

// const dirname = path.dirname(p);
// const extension = path.extname(p);
// // console.log(dirname); //print
// console.log(extension);

// const pF ='/home/user/node-pr/dir1/file.txt';

// const dirFname = path.dirname(pF);
// const extensionF = path.extname(pF);
// console.log(dirFname);
// console.log(extensionF);



// const source = p;
// const destination = pF;
// fs.copyFile(source, destination, (err) => {
//   if (err) throw err;
//   console.log('File was copied successfully');
// });

//how to make a sergver in node.js(to take a request and send a response)
//cdn is for static data(it provides server whhich is closest to the user) //edge server
//what is cookie(interview)

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html> <head> <title>My first page</title> </head> <body>');
    res.write('<h1>hello, world</h1>');
   res.write('</body> </html>');
   res.end();


})
const port = 3000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
})


