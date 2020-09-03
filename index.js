const fs = require("fs");
const readFolder = require("./scr/readFolder");
const readFile = require("./scr/readFile");

const mdLinks = (file, option) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, stats) => {
      if (err) reject("Arquivo não encontrado");
      else if (stats.isDirectory()) {
        resolve(readFolder(file, option));
      } else if (stats.isFile()) {
        resolved(readFile(file, option));
      }
    });
  });
};
module.exports = mdLinks;
