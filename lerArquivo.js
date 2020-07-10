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
module.exports = lerArquivo;
