#!/usr/bin/env node
const fs = require('fs')

const locate = process.argv[2]

if (!locate) {
  console.error("Error: File path not provided")
} else {
  fs.unlinkSync(locate)
  console.log("Successfully deleted " + locate + " file")
}