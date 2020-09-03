#!/usr/bin/env node
const lerArquivo = require("./scr/lerArquivo");
const path = process.argv[2];

lerArquivo(path).then((response) => console.log(response));
