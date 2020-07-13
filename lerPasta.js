const fs = require('fs');
const arquivosMd = require('./arquivoMD');
const lerArquivo = require('./lerArquivo');

const lerPasta = folder => {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, 'utf-8', (err, files) => {
      for (let x = 0; x < files.length; x++) {
        if (arquivosMd(files[x]) !== 'não é um arquivo md') {
          return resolve(lerArquivo(`${folder}/${files[x]}`))
        }
      }
      return reject(err)
    });
  });
};
module.exports = lerPasta;
