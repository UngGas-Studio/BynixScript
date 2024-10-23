#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { defaultConfig, config, readFolder, extensions } = require('../js/bsc.js');

const locate = process.argv[2];
const directory = String(readFolder);
const fileFrom = path.join(directory, locate);

try {
  fs.unlinkSync(fileFrom);
  console.log("Successfully deleted " + locate + " file");
} catch (err) {
  console.log("Error:", err.message);
}