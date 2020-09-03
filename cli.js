#!/usr/bin/env node
const readFile = require("./scr/readFile");
const path = process.argv[2];

readFile(path).then((response) => console.log(response));
