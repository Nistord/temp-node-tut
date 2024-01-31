


const saluta=require('./5-utils.js')
const nume=require('./4-names.js')
const data=require('./6-alternative-flaver.js')
require('./7-mind-grenade.js')
// saluta(nume.Ion);
// saluta(nume.Vasile);
// saluta("Maria");
// saluta(data);



// const _dirname="temp";
// console.log(_dirname);
// setInterval(()=>{
//     console.log('Oricare');
// },1000)
// console.log(__dirname);


// const http = require("http");
// const host = process.env.HOST || "localhost";
// const port = process.env.PORT || "3001";
// //
// const db = require("./db").connect();
// const fs = require("fs");

// date=[];
// fs.readFileSync("config.json",(error,dateconectare)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     date=JSON.parse(dateconectare);
//     console.log(date[0].host);
//     console.log(date[1].user);
//     console.log(date[2].password);
// const con = mysql.createConnection({
//   host: date[0].host,
//   user: date[1].user,
//   password: date[2].password
// });

// con.connect(err=>{
//   if(err) throw err;
//   console.log('Connected to mysql');
// });

// })

//  const mysql = require('mysql');



// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json");
//     switch (req.url) {
//         case "/":
//             res.end("Bine ai venit la micul meu API");
//             break;
//         case "/persoana":
//             if (req.method === "GET") {
//                 fs.readFile(db, (error, data) => {//unde db este denumirea asa zisei baze de date - este de fapt un fisier denumit db
//                     if (error) {
//                         res.statusCode = 500;
//                         res.end("Eroare de server");
//                         return;
//                     }
//                     res.end(data);
//                 })
//             } else {
//                 if (req.method === "POST") {
//                     res.statusCode = 201;
//                     fs.readFile(db, (error, data) => {
//                         if (error) {
//                             res.statusCode = 500;
//                             res.end("Server error");
//                             return;
//                         }
//                         const people = JSON.parse(data.toString());
//                         req.on("data", (chunk) => {
//                             const json = JSON.parse(chunk.toString());
//                             people.push(json);
//                             const allPeople = JSON.stringify(people);
//                             fs.writeFile(db, allPeople, (error) => {
//                                 if (error) {
//                                     res.statusCode = 500;
//                                     res.end("Server error");
//                                 }
//                             });
//                         });
//                         res.end();
//                     });
//                 }
//             }
//             break;
//         default:
//             res.end("Nu am gasit");
//             break;
//     }
// });
// server.listen(port, host, () => {
//     console.log(`Server running at http://${host}:${port}`);
// });