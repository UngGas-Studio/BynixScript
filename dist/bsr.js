#!/usr/bin/env node
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const { defaultConfig, config, readFolder, extensions } = require('../js/bsc.js');
const { parsing, parsingMsg, parseCode, addSemicolons } = require('../js/parser.js');
const { funcReplace, condReplace, forEachReplace, reassignReplace, assignReplace, logReplace, interactReplace, mathReplace, domReplace, commentReplace, utilityReplace, asyncReplace, flowReplace, forReplace, convReplace, checkReplace, oopReplace, excepReplace, expReplace, otherReplace } = require('./parser/parsingDecl.js');
const { stackParsing } = require('../js/error.js');

var locate = String(process.argv[2]);
const directory = String(readFolder);
var fileFrom = path.join(directory, locate);

const sandbox = {
  require: require,
  console: console,
  process: process,
}

var code
try {
  var box = fs.readFileSync(fileFrom, 'utf-8');
  if (locate.endsWith(extensions.primary) || locate.endsWith(extensions.secondary) || locate.endsWith(extensions.module)) {
    code = parseCode(box);
    code = addSemicolons(code);
    var parsingResults = parsing(code);
    
    if (parsingResults === false) {
      console.log("Error:", parsingMsg.message);
    } else {
      code = flowReplace(code);
      code = utilityReplace(code);
      code = funcReplace(code);
      code = condReplace(code);
      code = forEachReplace(code);
      code = reassignReplace(code);
      code = assignReplace(code);
      code = logReplace(code);
      code = interactReplace(code);
      code = mathReplace(code);
      code = commentReplace(code);
      code = asyncReplace(code);
      code = forReplace(code);
      code = convReplace(code);
      code = checkReplace(code);
      code = oopReplace(code);
      code = excepReplace(code);
      code = domReplace(code);
    
      vm.runInNewContext(code, sandbox, { filename: locate});
    }
  } else {
    console.log(`Error: Unsupported file extension. Please use a ${extensions.primary}, ${extensions.secondary}, or ${extensions.module} file.`)
  }
} catch (err) {
  const msg = err.message;
  if (msg.includes('module')) {
    console.log("Sorry, you cannot using module right now.");
  } else {
    const stackMsg = err.stack;
    console.log(stackParsing(locate, err.message, stackMsg, box, err.name, fileFrom));
  }
}