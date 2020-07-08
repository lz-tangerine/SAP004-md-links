const markdownIt = require("markdown-it");
const fs = require("fs");
const md = new markdownIt();

// const {
//   pathToFileURL
// } = require('url');

module.exports = () => {
  const path = require("path");
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Filenames with the .md extension:");
      files.forEach((file) => {
        if (path.extname(file) == ".md") {
          console.log(file);
          fs.readFile(file, "utf8", (err, data) => {
            if (err) {
              console.log(err);
            } else {
              const result = md.render(data);
              console.log(result);
            }
          });
        }
      });
    }
  });
};
