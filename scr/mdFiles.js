const path = require("path");

const mdFiles = (file) => {
  return path.extname(file) === ".md";
};

module.exports = mdFiles;
