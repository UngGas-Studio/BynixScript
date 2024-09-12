#!/usr/bin/env node
const fs = require('fs');

const locate = process.argv[2];

if (!locate) {
  console.error("Error: File path not provided.");
  process.exit(1);
}

const lastDotIndex = locate.lastIndexOf('.');
if (lastDotIndex === -1) {
  console.error("Error: Invalid file extension.");
  process.exit(1);
}

const end = locate.substring(lastDotIndex + 1);

if (locate.endsWith('.bs') || locate.endsWith('.bynixscript')) {
  let code = '';
  let name = locate
  name = name.replace(/(.+?)\.js/g, ".bs");
  name = name.replace(/(.+?)\.bynixscript/g, ".javascript");

  const command = fs.readFileSync(locate, 'utf-8');
  code = command;

  let blockStack = [];
  // Semua code replace yang Anda miliki
  code = code.replace(/func\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\):\n\s+([.\n]+)/g, (match, p1, p2, p3) => `function ${p1}(${p2}) {\n    ${p3}`);
  code = code.replace(/ elif\s+(.+?):\n\s+(.+?)/g, (match, p1, p2) => `} else if (${p1}) {\n    ${p2}`);
  code = code.replace(/if\s+(.+?):\n\s+([^\[\]\(\)\n]+)/g, (match, p1, p2) => `if (${p1}) \n{    ${p2}`);
  code = code.replace(/else:\n\s+(.+)/g, (match, p1) => `} else {\n    ${p1}`);
  code = code.replace(/forEach\((.+?)\)\:/g, (match, p1) => `forEach(${p1} => {`);
  code = code.replace(/var\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?);/g, (match, p1, p2) => `var ${p1} = ${p2};`);
  code = code.replace(/const\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?);/g, (match, p1, p2) => `var ${p1} = ${p2};`);
  code = code.replace(/print\((.+?)\)/g, (match, p1) => `console.log(${p1});`);
  code = code.replace(/touch\((.+?)\)/g, (match, p1) => `alert(${p1});`);
  code = code.replace(/ask\((.+?)\)/g, (match, p1) => `prompt(${p1});`);
  code = code.replace(/confirm\((.+?)\)/g, (match, p1) => `confirm(${p1});`);
  code = code.replace(/rand\((.+?)\)/g, (match, p1) => `Math.random(${p1})`);
  code = code.replace(/roundDown\((.+?)\)/g, (match, p1) => `Math.floor(${p1})`);
  code = code.replace(/roundUp\((.+?)\)/g, (match, p1) => `Math.ceil(${p1})`);
  code = code.replace(/maxOf\((.+?)\)/g, (match, p1) => `Math.min(${p1})`);
  code = code.replace(/minOf\((.+?)\)/g, (match, p1) => `Math.max(${p1})`);
  code = code.replace(/getElement\((.+?)\)/g, (match, p1) => `document.querySelector(${p1});`);
  code = code.replace(/getAllElement\((.+?)\)/g, (match, p1) => `document.querySelectorAll(${p1});`);
  code = code.replace(/createElement\((.+?)\)/g, (match, p1) => `document.createElement(${p1});`);
  code = code.replace(/\.addClass\((.+?)\)/g, (match, p1) => `.classList.add(${p1})`);
  code = code.replace(/([^\s].+)\.addElement\((.+?)\)/g, (match, p1, p2) => `document.${p1}.appendChild(${p2});`);
  code = code.replace(/listener\((.+?)\)\:/g, (match, p1) => `document.addEventListener(${p1}, function() {`);
  code = code.replace(/(.+?)\.change\((.+)\)/g, (match, p1, p2) => `${p1}.replace(${p2});`);
  code = code.replace(/(.+?)\.text/g, (match, p1) => `${p1}.textContent`)
  code = code.replace(/(.+?)\.text = (.+?)/g, (match, p1, p2) => `${p1}.textContent = ${p2}`);
  code = code.replace(/(?<!["'`])#([.+?]\s\n)/g, (match, p1) => `//${p1}`);
  code = code.replace(/\*\*(.+?)/g, (match, p1) => `/*${p1}`);
  code = code.replace(/(.+?)\*\*/g, (match, p1) => `${p1}*/`);
  code = code.replace(/is_includes\s===\s([a-zA-Z0-9"'`]+)/g, (match, p1) => `includes(${p1})`);
  code = code.replace(/is_matched\s===\s"(.+)"/g, (match, p1) => `match(${p1})`);
  code = code.replace(/is_value\s===\s([a-zA-Z0-9"'`]+)/g, (match, p1) => `value === ${p1}`);
  code = code.replace(/is_design.(.+?)\s===\s([a-zA-Z0-9"'`]+)/g, (match, p1, p2) => `style.${p1} === ${p2}`);
  code = code.replace(/(.+?)\.design\.(.+?)\s=\s(.+?)/g, (match, p1, p2, p3) => `${p1}.style.${p2} = ${p3}`);
  code = code.replace(/(.+?)\.design\s=\s(.+?)/g, (match, p1, p2) => `${p1}.style = ${p2}`);
  code = code.replace(/is_action\s([=!><]+)\s(["'])checked(["'])/g, (match) => `checked`);
  code = code.replace(/is_action\s([=!><]+)\s(["'])selected(["'])/g, (match) => `selected`);
  code = code.replace(/is_action\s([=!><]+)\s(["'])open(["'])/g, (match) => `open`);
  code = code.replace(/is_have\s([=!><]+)\s(["'])required(["'])/g, (match) => `required`);
  code = code.replace(/is_have\s([=!><]+)\s(["'])readOnly(["'])/g, (match) => `readOnly`);
  code = code.replace(/is_have\s([=!><]+)\s(["'])autofocus(["'])/g, (match) => `autofocus`);
  code = code.replace(/is_have\s([=!><]+)\s(["'])disabled(["'])/g, (match) => `disabled`);
  code = code.replace(/is_have\s([=!><]+)\s(["'])multiple(["'])/g, (match) => `multiple`);
  code = code.replace(/is_have\s([=!><]+)\s(["'])hidden(["'])/g, (match) => `hidden`);
  code = code.replace(/delay\:\n\s+(.+?)/g, (match, p1) => `setTimeout(function() {\n    ${p1}`);
  code = code.replace(/repeat\:\n\s+(.+?)/g, (match, p1) => `setInterval(function() {\n    ${p1}`);
  code = code.replace(/for (.+?)=(.+?) to (.+?)\:/g, (match, p1, p2, p3) => `for (let ${p1} = ${p2}; ${p1} < ${p3}; ${p1}++) {`);
  code = code.replace(/for (.+?) in (.+?)\:/g, (match, p1, p2) => `for (let ${p1} in ${p2}) {`);
  code = code.replace(/for (.+?) of (.+?)\:/g, (match, p1, p2) => `for (let ${p1} of ${p2}) {`);
  code = code.replace(/match (.+?):/g, (match, p1) => `switch (${p1}) {`);
  code = code.replace(/case (.+?):\n(.+?)/g, (match, p1, p2) => `case ${p1}: \n${p2}`);
  code = code.replace(/break:/g, "break;");
  code = code.replace(/([^\s].+?)\.image\s*=\s*(['"`][^'"`]*['"``])/g, (match, p1, p2) => `image(${p1}, ${p2})`);
  code = code.replace(/end\:\:/g, "});");
  code = code.replace(/end\:(?!\d)/g, "}");
  code = code.replace(/end\:(.+?)\:/g, (match, p1) => `}, ${p1});`);
  
  fs.writeFile(`${name}.js`, code, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      process.exit(1);
    }
    console.log(`Conversion successful: ${name}.js`);
  });
} else {
  console.error("Error: Unsupported file type. Please provide a .bs or .bynixscript file.");
}
