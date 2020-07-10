const fs = require('fs');
const arquivosMd = require('./arquivoMD');
const lerArquivo = require('./lerArquivo');

const lerPasta = folder => {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, 'utf-8', (err, files) => {
      files.filter(arquivosMd).reduce((file) => {
        let listaLinks = [];
        lerArquivo(`${folder}/${file}`).then(mdResult => {
          if (err) {
            err = 'Link não encontrado';
            reject(err)
          } else {
            resolve(mdResult)
          }
        });
        return Promise.all(listaLinks)
      })
    });
  });
};
module.exports = lerPasta;
