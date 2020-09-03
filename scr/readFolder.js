const fs = require("fs");
const mdFile = require("./mdFiles");
const readFile = require("./readFile");

const readFolder = (folder) => {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, "utf-8", (err, files) => {
      for (let x = 0; x < files.length; x++) {
        if (mdFile(files[x]) !== "não é um arquivo md") {
          return resolve(readFile(`${folder}/${files[x]}`));
        }
      }
      return reject(err);
    });
  });
};
module.exports = readFolder;
