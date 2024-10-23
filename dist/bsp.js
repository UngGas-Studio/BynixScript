#!/usr/bin/env node
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const { extensions, toFolder, readFolder, translate } = require('../js/bsc.js');
const { parsing, parsingMsg, parseCode, addSemicolons } = require('../js/parser.js');
const { funcReplace, condReplace, forEachReplace, reassignReplace, assignReplace, logReplace, interactReplace, mathReplace, domReplace, commentReplace, utilityReplace, asyncReplace, flowReplace, forReplace, convReplace, checkReplace, oopReplace, excepReplace, expReplace, otherReplace } = require('./parser/parsingDecl.js');
const { stackParsing } = require('../js/error.js');

const sandbox = {
  console: {
      log: () => {}
  },
  require: require,
  process: process
};

var locate = String(process.argv[2]);
const directory = String(readFolder);
var fileFrom = path.join(directory, locate);

var code
try {
  var box = fs.readFileSync(fileFrom, 'utf-8');
  if (locate.endsWith(extensions.primary) || locate.endsWith(extensions.secondary) || locate.endsWith(extensions.module)) {
    code = parseCode(box);
    code = addSemicolons(code);
    const parsingResults = parsing(code);
    
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
      
      vm.runInNewContext(code, sandbox);
      console.log(code);
    }
  } else {
    console.log(`Error: Unsupported file extension. Please use a ${extensions.primary}, ${extensions.secondary}, or ${extensions.module} file.`)
  }
} catch (err) {
  const msg = err.message;
  if (msg.includes('module')) {
    console.log(code);
  } else {
    const stackMsg = err.stack;
    console.log(stackParsing(locate, err.message, stackMsg, box, err.name, fileFrom));
  }
}