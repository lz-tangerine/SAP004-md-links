const fs = require('fs');
const lerPasta = require('./lerPasta')
const lerArquivo = require('./lerArquivo');
const {
  resolve
} = require('path');

const mdLinks = ([path, option]) => {
  return new Promise((resolve, reject) => {
    fs
  })
}

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

// const fs = require('fs');
// const arquivosMd = require('./arquivoMD');
// const lerArquivo = require('./lerArquivo');

// const lerPasta = folder => {
//   return new Promise((resolve, reject) => {
//     fs.readdir(folder, 'utf-8', (err, files) => {
//       files.filter(arquivosMd).reduce((file) => {
//         let listaLinks = [];
//         lerArquivo(`${folder}/${file}`).then(mdResult => {
//           if (err) {
//             err = 'Link não encontrado';
//             reject(err)
//           } else {
//             resolve(mdResult)
//           }
//         });
//         return Promise.all(listaLinks)
//       })
//     });
//   });
// };
// module.exports = lerPasta;
