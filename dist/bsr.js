#!/usr/bin/env node
const fs = require('fs')
const vm = require('vm')
const path = require('path')
const { defaultConfig, config, readFolder, extensions } = require('../js/bsconfig.js')
const { parsing, parsingMsg, parseCode } = require('../js/parser.js')
const { funcReplace, condReplace, forEachReplace, reassignReplace, assignReplace, logReplace, interactReplace, mathReplace, domReplace, commentReplace, utilityReplace, asyncReplace, flowReplace, forReplace, convReplace, checkReplace, oopReplace, excepReplace, otherReplace } = require('./parser/parsingDecl.js')

const sandbox = {
  require: require,
  console: console,
  process: process,
}

const locate = String(process.argv[2])
const directory = String(readFolder)
var fileFrom = path.join(directory, locate)

if (locate.endsWith(extensions.primary) || locate.endsWith(extensions.secondary) || locate.endsWith(extensions.module)) {
  var box = fs.readFileSync(fileFrom, 'utf-8')
  var code = parseCode(box)
  var parsingResults = parsing(code)
  
  if (parsingResults === false) {
    console.log("Please check your code and try again.")
  } else {
    code = flowReplace(code)
    code = utilityReplace(code)
    code = funcReplace(code)
    code = condReplace(code)
    code = forEachReplace(code)
    code = reassignReplace(code)
    code = assignReplace(code)
    code = logReplace(code)
    code = interactReplace(code)
    code = mathReplace(code)
    code = commentReplace(code)
    code = asyncReplace(code)
    code = forReplace(code)
    code = convReplace(code)
    code = checkReplace(code)
    code = oopReplace(code)
    code = excepReplace(code)
  
    vm.runInNewContext(code, sandbox);
  }
} else {
  console.log("Invalid file name '" + locate + "'")
  console.log("Use the " + extensions.primary + ", " + extensions.secondary + ", or " + extensions.module + " extension")
}