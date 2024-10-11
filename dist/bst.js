#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { extensions, toFolder, readFolder, watch, strict, translate } = require('../js/bsconfig.js')
const { parsing, parsingMsg, parseCode, addSemicolons } = require('../js/parser.js')
const { funcReplace, condReplace, forEachReplace, reassignReplace, assignReplace, logReplace, interactReplace, mathReplace, domReplace, commentReplace, utilityReplace, asyncReplace, flowReplace, forReplace, convReplace, checkReplace, oopReplace, excepReplace, expReplace, otherReplace } = require('./parser/parsingDecl.js')
const { watching } = require('../js/watcher.js')

var locate = String(process.argv[2])
const directory = String(toFolder)
const directory2 = String(readFolder)
var filePath = path.join(directory, locate)
var fileFrom = path.join(directory2, locate)

if (watch === true) {
  watching(directory2, directory)
} else {
  if (locate.endsWith(extensions.primary) || locate.endsWith(extensions.secondary) || locate.endsWith(extensions.module)) {
    var box = fs.readFileSync(fileFrom, 'utf-8')
    var code = parseCode(box)
    code = addSemicolons(code)
    const parsingResults = parsing(code)
    
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
      code = domReplace(code)
      
      filePath = filePath.replace(extensions.primary, ".js")
      filePath = filePath.replace(extensions.secondary, ".js")
      filePath = filePath.replace(extensions.module, ".mjs")
      
      fs.writeFileSync(filePath, code, 'utf8')
      console.log("Successfully compiled " + locate + " file")
    }
  } else {
    locate = locate.replace("undefined", "")
    console.log("Invalid file name '" + locate + "'")
    console.log("Use the " + extensions.primary + ", " + extensions.secondary + ", or " + extensions.module + " extension")
  }
}