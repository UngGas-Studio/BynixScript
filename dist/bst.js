#!/usr/bin/env node
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const { extensions, toFolder, readFolder, watch, strict, translate } = require('../js/bsc.js');
const { parsing, parsingMsg, parseCode, addSemicolons } = require('../js/parser.js');
const { funcReplace, condReplace, forEachReplace, reassignReplace, assignReplace, logReplace, interactReplace, mathReplace, domReplace, commentReplace, utilityReplace, asyncReplace, flowReplace, forReplace, convReplace, checkReplace, oopReplace, excepReplace, expReplace, otherReplace } = require('./parser/parsingDecl.js');
const { watching } = require('../js/watcher.js');
const { stackParsing } = require('../js/error.js');

const sandbox = {
  console: {
      log: () => {}
  },
  require: require,
  process: process
};

var locate = String(process.argv[2]);
const directory = String(toFolder);
const directory2 = String(readFolder);
var filePath = path.join(directory, locate);
var fileFrom = path.join(directory2, locate);

var code
try {
  var box = fs.readFileSync(fileFrom, 'utf-8');
  if (watch === true) {
    watching(directory2, directory);
  } else {
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
        filePath = filePath.replace(extensions.primary, ".js");
        filePath = filePath.replace(extensions.secondary, ".js");
        filePath = filePath.replace(extensions.module, ".mjs");
        
        fs.writeFileSync(filePath, code, 'utf8');
        console.log("Successfully compiled " + locate + " file");
      }
    } else {
      console.log(`Error: Unsupported file extension. Please use a ${extensions.primary}, ${extensions.secondary}, or ${extensions.module} file.`)
    }
  }
} catch (err) {
  const msg = err.message;
  if (msg.includes('module')) {
    filePath = filePath.replace(extensions.primary, ".js");
    filePath = filePath.replace(extensions.secondary, ".js");
    filePath = filePath.replace(extensions.module, ".mjs");
    
    fs.writeFileSync(filePath, code, 'utf8');
    console.log("Successfully compiled " + locate + " file");
  } else {
    const stackMsg = err.stack;
    console.log(stackParsing(locate, err.message, stackMsg, box, err.name));
  }
}