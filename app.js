// const http = require('http')
// const server = http.createServer((req, res) => {
//     if(req.url==='/'){
//         res.end(`
//         <h1>Nivel H!</h1>
//         <p>paragraf</p>
//         <table>
//           <th>Cap 1</th>
//           <tr><td>Informatia 1</td></tr>
//         </table>
//         `)
//     }
//     if(req.url==='/despre'){
//         res.end(`<a href="/">Acasa</a>
//         `);
//     }
// })
// server.listen(3000)

const _ =require('lodash');
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items);
console.log(newItems)
