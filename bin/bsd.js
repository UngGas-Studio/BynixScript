#!/usr/bin/env node
const fs = require('fs');

const locate = process.argv[2];

if (!locate) {
  console.error("Error: File path not provided.");
  process.exit(1);
}
try {
  fs.unlinkSync(locate);
  console.log('File deleted successfully');
} catch (err) {
  console.error('Error deleting file:', err);
}
