// console.log('Welcome to NodeJS Modules');
// console.log('tollie');
// console.log('Hou Jou Bek Vark');
// let numb1 = 6
// let numb2 = 12
// console.log(`${numb1} + ${numb2}`);
// console.log(numb1 + numb2);
// let person ={
//     firtsName: 'Zubair',
//     lastName: 'Moerat',
//     age: 22
// };
// console.log(`${person.firtsName}`);
// console.log(`${person.lastName}`);
// console.log(`${person.age}`);
// console.log(person);
// function addition(... nums){
//     let sum = 0 
//     for(let num of nums) {
//         sum += num
//     }
//     console.log(sum);
// }
// addition(150,250,142,360);
// function addition(...args){
//     return args.reduce((a,b)=> a + b)
// };
// console.log(addition(2,4,6));
// console.log(addition(2,4,6,43,56));

// once a global file/module is made it can be accessed anywhere
// Command JS
// let humanVar = require('./variables');
// console.log(humanVar.human);
// console.log(`${humanVar.human.firstName}`);
// console.log(require('./variables').human);
// E JS

// shows directories and filenames
// console.log(__dirname);
// console.log(__filename);

// console.log(process.versions);

// URL
// let url = require('url')
// Create an url
// let webAdd = url.parse('https://lifechoices.co.za/meet-the-team')
// console.log(`path name: ${webAdd.pathname}`);
// console.log(`query: ${webAdd.query}`);
// console.log(`host: ${webAdd.host}`);
// console.log(`hostname: ${webAdd.hostname}`);
// console.log(`href: ${webAdd.href}`);
// console.log(`PORT: ${webAdd.port}`);

// What programming language was used to create or implement JS?
// C/C++

// What programming language was used to create Node JS?
// JS,C++,Python

// Primative vs Dynamic/reference data types?
// 
// HTTP MODULE
// const http = require('http')

// const port = +process.env.PORT || 4000

// http.createServer((req, res)=> {
//     res.writeHead(200,{
//         'Context-type':'text/plain'
//     })
//     res.end('Hello World')
// }).listen(port, ()=>{
//     console.log(`Server is running on: http://localhost:${port}`);
// })