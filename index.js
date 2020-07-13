const fs = require('fs');
const lerPasta = require('./scr/lerPasta')
const lerArquivo = require('./scr/lerArquivo');

const mdLinks = (file, option) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, stats) => {
      if (err) reject('Arquivo não encontrado');
      else if (stats.isDirectory()) {
        resolve(lerPasta(file, option));
      } else if (stats.isFile()) {
        resolved(lerArquivo(file, option));
      }
    })
  })
}
module.exports = mdLinks;
