const markdownIt = require("markdown-it");
const fs = require("fs");
const md = new markdownIt();
const path = require("path");
const {
  JSDOM
} = require("jsdom");

module.exports = () => {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Filenames with the .md extension:");
      files.forEach((file) => {
        if (path.extname(file) === ".md") {
          console.log(file);
          fs.readFile(file, "utf8", (err, data) => {
            if (err) {
              console.log(err);
            } else {
              const result = md.render(data);
              const dom = new JSDOM(`<!DOCTYPE html><p>${result}</p>`);
              const getLink = dom.window.document.querySelectorAll("a");
              for (let a of getLink) {
                console.log(a.href);
              }
            }
          });
        }
      });
    }
  });
};
