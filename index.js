const fs = require('fs');
const lerPasta = require('./lerPasta')
const lerArquivo = require('./lerArquivo');

const mdLinks = ([file, option]) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
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
