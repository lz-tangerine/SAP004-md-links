const {
  pathToFileURL
} = require('url');

module.exports = () => {
  mdLinks();
};

function mdLinks() {
  const fs = require('fs');
  const path = (require('path'))
  fs.readdir(__dirname, (err, files) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Filenames with the .md extension:");
        files.forEach(file => {
          if (path.extname(file) == ".md") {
            console.log(file);
          }
        });
      }
    },

    fs.readFile("./README.md", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data)
      }
    }))
}
mdLinks()
