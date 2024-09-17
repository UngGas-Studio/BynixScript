const style = document.createElement("style");
style.textContent = `
  bynix {
    display: none;
  }
  `;
style.classList.add("bynix-style");
document.head.appendChild(style);
const milown = document.createElement("script");
const ajax = document.createElement("script");
const fontawesome = document.createElement("link");
const brython = document.createElement("script");
milown.src = '<script src="https://cdn.jsdelivr.net/gh/UngGasStudio/MILOWN-Lang@main/Beta/MILOWN-Lang%200.1BETA1.js"></script>';
ajax.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/4.0.0-beta.2/jquery.min.js"';
fontawesome.rel = "stylesheet";
fontawesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
brython.type = "type/javascript";
brython.src = 'https://cdn.jsdelivr.net/npm/brython@3.9.6/brython.min.js';
document.head.appendChild(ajax);
document.head.appendChild(fontawesome);
document.head.appendChild(milown);
document.head.appendChild(brython);
document.addEventListener("DOMContentLoaded", function() {
  const bynixTags = document.querySelectorAll("bynix");
  bynixTags.forEach(tag => {
    var code = '';
    const src = tag.getAttribute('src');
    const end = src.substring(src.lastIndexOf('.') + 1);
    if (src.endsWith(".bs") || src.endsWith(".bynixscript") || src.endsWith(".mbs")) {
      if (tag.hasAttribute('src')) {
        fetch(src)
        .then(response => response.text())
        .then(srcCode => {
          code = srcCode;
          executeCode(code);
          tag.remove();
          style.remove();
        })
        .catch(error => console.error('Error fetching BynixScript code:', error));
    } else {
      code = tag.textContent;
      executeMilownCode(code);
      tag.remove();
      style.remove();
      }
    } else {
      console.error("Invalid extension '." + end + "'");
    }
  });
});

let cmds = [];
function executeCode(code) {
  if (code.match(/(?<!["'`])let\s(?<!["'`])/g) || code.match(/(?<!["'`])function\s(?<!["'`])/g) || code.match(/(?<!["'`])if\s\((.+?)\)\s{(?<!["'`])/g) || code.match(/(?<!["'`])else if\s\((.+?)\)\s{(?<!["'`])/g) || code.match(/(?<!["'`])else\s{\s(?<!["'`])/g) || code.match(/(?<!["'`])console(.+?)\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])alert\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])prompt\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])Math\.random\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])Math\.floor\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])Math\.ceil\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])Math\.min\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])Math\.max\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])document\.createElement\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])document\.(.+?)\.appendChild\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])(.+?).replace\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])\/\/(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.textContent\s=\s(.+?)(?<!["'`])/g) || code.match(/(?<!["'`])\/\*(.+?)\*\/(?<!["'`])/g) || code.match(/(?<!["'`])document\.addEventListener\((.+?), function\(\) \{(?<!["'`])/g) || code.match(/(?<!["'`])forEach\((.+?) \=\> \{(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.includes\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.match\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.value ===(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.value ==(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.value =(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.value !===(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.value !==(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.value !=(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.value >(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.value <(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.value \=\>(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.value <==(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style ===(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style ==(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style =(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style !===(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style !==(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style !=(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style >(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style <(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style \=\>(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style <==(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style\.(.+?) =(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.style =(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.checked(?<!["'`])/g) || code.match(/(?<!["'`])(.+?)\.required(?<!["'`])/g) || code.match(/(?<!["'`])setTimeout\(function\(\) \{(?<!["'`])/g) || code.match(/(?<!["'`])setInterval\(function\(\) \{(?<!["'`])/g) || code.match(/(?<!["'`])for \((.+?)\) \{(?<!["'`])/g) || code.match(/(?<!["'`])classList\.add\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])switch\s\((.+?)\)(?<!["'`])/g) || code.match(/(?<!["'`])break\:(?<!["'`])/g) || code.match(/(?<!["'`])default\(?<!["'`]):/g) || code.match(/(?<!["'`])image\((.+?), (.+?)\)(?<!["'`])/g)) {
    console.error(`Invalid function in your code`);
  } else {
  code = code.replace(/is_includes\s===\s"(.+?)"/g, (match, p1) => `includes("${p1}")`);
  code = code.replace(/is_includes\s===\s'(.+?)'/g, (match, p1) => `includes('${p1}')`);
  code = code.replace(/is_includes\s===\s(.+?)/g, (match, p1) => `includes(${p1})`)
  code = code.replace(/is_value\s===\s"(.+?)"/g, (match, p1) => `value === "${p1}"`);
  code = code.replace(/is_value\s===\s'(.+?)'/g, (match, p1) => `value === '${p1}'`);
  code = code.replace(/is_value\s===\s(.+?)/g, (match, p1) => `value === ${p1}`);
  code = code.replace(/func\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\):/g, (match, p1, p2) => `function ${p1}(${p2}) {`);
  code = code.replace(/ elif\s+(.+?):\n\s+(.+?)/g, (match, p1, p2) => `} else if (${p1}) {\n    ${p2}`);
  code = code.replace(/if\s+(.+?):/g, (match, p1) => `if (${p1}) {`);
  code = code.replace(/else:\n\s+(.+)/g, (match, p1) => `} else {\n    ${p1}`);
  code = code.replace(/forEach\((.+?)\s=>\s(.+?)\)/g, (match, p1, p2) => `forEach(${p1} => ${p2})`);
  code = code.replace(/forEach\((.+?)\)\:/g, (match, p1) => `forEach(${p1} => {`);
  code = code.replace(/var\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?);/g, (match, p1, p2) => `var ${p1} = ${p2};`);
  code = code.replace(/const\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?);/g, (match, p1, p2) => `var ${p1} = ${p2};`);
  code = code.replace(/print(\.[a-zA-Z]+)?\((.+?)\)/g, (match, p1, p2) => {
    const type = p1 || '';
    
    if (type.includes(".error") || type.includes(".info") || type.includes(".warn") || type.includes(".debug") || type.includes(".trace") || type.includes(".assert")) {
      return `console${p1}(${p2});`;
    } else {
      return `console.log(${p2});`;
    }
  });
  code = code.replace(/is_(\w+)\s*===\s*(["'`])(.*?)\1/g, (match, p1, p2) => {
    if (p1 === "example11") {
      return `// example11(${p2})`;
    }
  })
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
  code = code.replace(/(.+?)\.listener\((.+?)\)\:/g, (match, p1, p2) => {
    const type = p1 || '';
    
    if (type.includes("document")) {
      return `document.addEventListener(${p2}, function() {`;
    } else {
      return `${p1}.addEventListener(${p2}, () => {`;
    }
  });
  code = code.replace(/(.+?)\.change\((.+)\)/g, (match, p1, p2) => `${p1}.replace(${p2});`);
  code = code.replace(/(.+?)\.text/g, (match, p1) => `${p1}.textContent`)
  code = code.replace(/(.+?)\.text = (.+?)/g, (match, p1, p2) => `${p1}.textContent = ${p2}`);
  code = code.replace(/(?<!["'`])#([.+?]\s\n)/g, (match, p1) => `//${p1}`);
  code = code.replace(/\*\*(.+?)/g, (match, p1) => `/*${p1}`);
  code = code.replace(/(.+?)\*\*/g, (match, p1) => `${p1}*/`);
  code = code.replace(/is_matched\s===\s"(.+?)"/g, (match, p1) => `match(${p1})`);
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
  
  const script = document.createElement("script");
  script.textContent = code;
  document.body.appendChild(script);
  console.log(code);
  }
}

function customSetTimeout(time, callback) {
    setTimeout(callback, time);
}

function example(message) {
  alert(message);
}

function image(element, imageClass) {
  if (!element) {
    console.error(`Element tidak ditemukan.`);
    return;
  }

  const icon = document.createElement("i");

  // Pisahkan class yang diberikan berdasarkan spasi
  const classes = imageClass.split(' ');
  classes.forEach(cls => icon.classList.add(cls));

  element.appendChild(icon);
}
