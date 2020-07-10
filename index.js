// const markdownit = require("markdown-it");
// const fs = require("fs");
// const md = new markdownit();
// const path = require("path");
// const {
//   JSDOM
// } = require("jsdom");

// module.exports = () => {
//   fs.readdir(__dirname, (err, files) => {
//     if (err) {
//       console.log(err);
//     } else {
//       files.forEach((file) => {
//         if (path.extname(file) === ".md") {
//           console.log(file);
//           fs.readFile(file, "utf8", (err, data) => {
//             if (err) {
//               console.log(err);
//             } else {
//               const result = md.render(data);
//               const dom = new JSDOM(`<!DOCTYPE html><p>${result}</p>`);
//               const getLink = dom.window.document.querySelectorAll("a");
//               for (let a of getLink) {
//                 console.log(a.href)
//               }
//             }
//           });
//         }
//       });
//     }
//   });
// };

const fs = require('fs');
const arquivosMd = require('.')

const fs = require('fs');
const MarkdownIt = require("markdown-it");


const lerArquivo = file => {
  return new Promisse((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        err = 'Arquivo não encontrado';
        reject(err)
      } else {
        const md = new MarkdownIt();
        const result = md.render(data)
        resolve(result)
        console.log(resolve)
      }
    })
  })
}
lerArquivo()
