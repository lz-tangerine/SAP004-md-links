const path = require('path');

const arquivosMd = file => {
  return path.extname(file) === '.md'
}

module.exports = arquivosMd;
