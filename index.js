module.exports = () => {
  mdLinks();
};

function mdLinks() {
  const fs = require('fs');
  fs.readdir(__dirname, (err, files) => {
      if (err) {
        console.log(err);
      } else {
        console.log("\nCurrent directory filenames:");
        files.forEach(file => {
          console.log(file);
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
read()
