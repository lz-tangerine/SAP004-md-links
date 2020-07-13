const fs = require('fs');
const arquivoMd = require('./arquivoMD')
const MarkdownIt = require("markdown-it");
const arr = []

const lerArquivo = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        err = 'não foi possível ler o arquivo';
        reject(err);
      } else {
        if (arquivoMd(path) !== 'não é um arquivo md') {
          const markdownParsed = MarkdownIt.parseInline(data, {});
          const tokens = markdownParsed[0].children;
          tokens.forEach(({
            type,
            attrs
          }, index) => {
            if (type === 'link_open') {
              arr.push = (`href: ${attrs[0][1]} text: ${tokens[index + 1].content}`)
              resolve(tokens);
            }
          })
        }
      }
    });
  })
}
module.exports = lerArquivo;
