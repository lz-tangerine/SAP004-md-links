const fs = require("fs");
const MarkdownIt = require('markdown-it')();
const path = require("path");

module.exports = () => {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        if (path.extname(file) === ".md") {
          console.log(file);
          fs.readFile(file, "utf8", (err, data) => {
            if (err) {
              console.log(err);
            } else {
              const markdownParsed = MarkdownIt.parseInline(data, {});
              const tokens = markdownParsed[0].children;
              tokens.forEach(({
                type,
                attrs
              }, index) => {
                if (type === 'link_open') {
                  console.log(`href: ${attrs[0][1]} text: ${tokens[index + 1].content}`)
                }
              })
            }
          })
        };
      })
    }
  });
}
