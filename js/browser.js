let parsingResults;
let allowJs;
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
    const allowJsTag = tag.getAttribute('allowJs');
    
    if (allowJsTag === null) {
      allowJs = "false";
    } else {
      allowJs = allowJsTag;
    }
    
    // Jika src ada, lakukan fetch
    if (src) {
      const end = src.substring(src.lastIndexOf('.') + 1);
      
      if (src.endsWith(".bs") || src.endsWith(".bynixscript") || src.endsWith(".mbs")) {
        fetch(src)
        .then(response => response.text())
        .then(srcCode => {
          code = parseCode(srcCode);
          parsingResults = parsing(code);
          code = addSemicolons(code);
          executeCode(code);
          tag.remove();
        })
        .catch(error => console.error('Error fetching BynixScript code:', error));
      } else {
        console.error("Invalid extension '." + end + "'");
      }
    } else {
      // Jika src tidak ada, ambil kode dari textContent
      code = parseCode(tag.textContent);
      parsingResults = parsing(code);
      code = addSemicolons(code);
      executeCode(code);
      tag.remove();
    }
  });
});

function executeCode(code) {
  if (parsingResults === "false") {
    console.error(`Please check your code and try again.`);
  } else {
  code = code.replace(/func\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\):/g, (match, p1, p2) => `function ${p1}(${p2}) {`);
  code = code.replace(/elif\s+(.+?):/g, (match, p1) => `} else if (${p1}) {`);
  code = code.replace(/if\s+(.+?):/g, (match, p1) => `if (${p1}) {`);
  code = code.replace(/else:/g, "} else {");
  code = code.replace(/forEach\((.+?)\)\:/g, (match, p1) => `forEach(${p1} => {`);
  code = code.replace(/forEach\((.+?)\s=>\s(.+?)\)/g, (match, p1, p2) => `forEach(${p1} => ${p2})`);
  code = code.replace(/var\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?);/g, (match, p1, p2) => `var ${p1} = ${p2};`);
  code = code.replace(/const\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?);/g, (match, p1, p2) => `var ${p1} = ${p2};`);
  code = code.replace(/print(\.[a-zA-Z]+)?\((.+?)\)/g, (match, p1, p2) => {
    const type = p1 || '';

    if (type.includes(".info") || type.includes(".debug") || type.includes(".trace") || type.includes(".warn") || type.includes(".assert")) {
      return `console${p1}(${p2})`
    } else if (type.includes(".err")) {
      return `console.error(${p2})`
    } else if (match.includes("/")) {
      return match;
    } else {
      return `console.log(${p2})`
    }
  });
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
  code = code.replace(/(.+?)\.listener\((.+?)\)\:/g, (match, p1, p2) => `${p1}.addEventListener(${p2}, () => {`)
  code = code.replace(/listener\((.+?)\)\:/g, (match, p1) => `document.addEventListener(${p1}, function() {`)
  code = code.replace(/(.+?)\.change\((.+?), \((.+?)\)\)\:/g, (match, p1, p2, p3) => `${p1}.replace(${p2}, (${p3}) => {`)
  code = code.replace(/(.+?)\.change\((.+)\)/g, (match, p1, p2) => `${p1}.replace(${p2})`);
  code = code.replace(/(.+?)\.text/g, (match, p1) => `${p1}.textContent`)
  code = code.replace(/(.+?)\.text = (.+?)/g, (match, p1, p2) => `${p1}.textContent = ${p2}`);
  code = code.replace(/(?<!["'`])#(.+?)/g, (match, p1) => `//${p1}`);
  code = code.replace(/\*\*(.+?)/g, (match, p1) => `/*${p1}`);
  code = code.replace(/(.+?)\*\*/g, (match, p1) => `${p1}*/`);
  code = code.replace(/is_includes\s===\s([a-zA-Z0-9"'`]+)/g, (match, p1) => `includes(${p1})`);
  code = code.replace(/is_start\s===\s([a-zA-Z0-9"'`!?*#@$_&-+|.,:;=×÷%/]+)/g, (match, p1) => `startsWith(${p1})`);
  code = code.replace(/is_end\s===\s([a-zA-Z0-9"'`!?*#@$_&-+|.,:;=×÷%/]+)/g, (match, p1) => `endsWith(${p1})`);
  code = code.replace(/is_matched\s===\s"(.+?)"/g, (match, p1) => `match(${p1})`);
  code = code.replace(/is_matched\s===\s'(.+?)'/g, (match, p1) => `match(${p1})`);
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
  code = code.replace(/(?<![(])match\s*(.+?)\:/g, (match, p1) => `switch ((${p1})) {`)
  code = code.replace("switch ((", "switch (")
  code = code.replace(")) {", ") {")
  code = code.replace(/case (.+?):\n(.+?)/g, (match, p1, p2) => `case ${p1}: \n${p2}`)
  code = code.replace(/([^\s].+?)\.image\s*=\s*(['"`][^'"`]*['"``])/g, (match, p1, p2) => `image(${p1}, ${p2})`);
  code = code.replace(/process\.argv\[(\d+)\]/g, (match, p1) => {
    var a = Number(p1) + 0;
    return `process.argv[${a}]`;
  });
  code = code.replace(/int\((.+?)\)/g, (match, p1) => `parseInt(${p1})`)
  code = code.replace(/num\((.+?)\)/g, (match, p1) => `Number(${p1})`)
  code = code.replace(/str\((.+?)\)/g, (match, p1) => `String(${p1})`)
  code = code.replace(/float\((.+?)\)/g, (match, p1) => `parseFloat(${p1})`)
  code = code.replace(/(.+?)\.map\((.+?)\)\:/g, (match, p1, p2) => `${p1}.map(function(${p2}) {`)
  code = code.replace(/(.+?)\.filter\((.+?)\)\:/g, (match, p1, p2) => `${p1}.filter(function(${p2}) {`)
  code = code.replace(/(.+?)\.reduce\((.+?)\)\:/g, (match, p1, p2) => `${p1}.reduce(function(${p2}) {`)
  code = code.replace(/(?<![\s])([a-zA-Z0-9_$]+)\.type/g, (match, p1) => `typeof ${p1}`)
  code = code.replace(/([a-zA-Z0-9_$]+)\.is_type\s===\s([a-zA-Z0-9"'`]+)/g, (match, p1, p2) => `typeof ${p1} === ${p2}`)
  code = code.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])type(["'])/g, (match, p1) => `${p1} instanceof TypeError`)
  code = code.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])reference(["'])/g, (match, p1) => `${p1} instanceof ReferenceError`)
  code = code.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])syntax(["'])/g, (match, p1) => `${p1} instanceof SyntaxError`)
  code = code.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])range(["'])/g, (match, p1) => `${p1} instanceof RangeError`)
  code = code.replace(/([a-zA-Z0-9_$]+)\.is_error\s===\s(["'])(.+?)(["'])/g, (match, p1, p2, p3) => `${p1} instanceof ${p3}`)
  code = code.replace(/constructor\((.+?)\)\:/g, (match, p1) => `constructor(${p1}) {`);
  code = code.replace(/(.+?)\(\)\:/g, (match, p1) => `${p1}() {`);
  code = code.replace(/class\s(.+?)\:/g, (match, p1) => `class ${p1} {`);
  code = code.replace(/class\s(.+?)\sextends\s(.+?)\:/g, (match, p1, p2) => `class ${p1} extends ${p2} {`);
  code = code.replace(/static\((.+?)\)\ {/g, (match, p1) => `static(${p1}) {`);
  code = code.replace(/super\((.+?)\)\:/g, (match, p1) => `super(${p1})`)
  code = code.replace(/throw (.+?)/g, (match, p1) => `throw ${p1}`)
  code = code.replace(/new (.+?)/g, (match, p1) => `new ${p1}`)
  code = code.replace(/end\:(.+?)/g, (match, p1) => `}, ${p1});`);
  code = code.replace(/handle\:/g, 'try {')
  code = code.replace(/recovery\s\((.+?)\)\:/g, (match, p1) => `} catch (${p1}) {`)
  code = code.replace(/final\:/g, "} finally {")
  code = code.replace(/handle\:/g, 'try {')
  code = code.replace(/recovery\s*\((.+?)\)\:/g, (match, p1) => `} catch (${p1}) {`)
  code = code.replace(/final\:/g, "} finally {")
  code = code.replace(/Err\((.+?)\)/g, (match, p1) => `Error(${p1})`)
  code = code.replace(/URIErr\((.+?)\)/g, (match, p1) => `URIError(${p1})`)
  code = code.replace(/EvalErr\((.+?)\)/g, (match, p1) => `EvalError(${p1})`)
  code = code.replace(/TypeErr\((.+?)\)/g, (match, p1) => `TypeError(${p1})`)
  code = code.replace(/RangeErr\((.+?)\)/g, (match, p1) => `RangeError(${p1})`)
  code = code.replace(/SyntaxErr\((.+?)\)/g, (match, p1) => `Error(${p1})`)
  code = code.replace(/InternalErr\((.+?)\)/g, (match, p1) => `InternalError(${p1})`)
  code = code.replace(/ReferenceErr\((.+?)\)/g, (match, p1) => `ReferenceError(${p1})`)
  
  const script = document.createElement("script");
  script.textContent = code;
  document.body.appendChild(script);
  }
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

function parsing(variable) {
  const patterns = [
    /let\s*(.+?)=(.+?)/g,
    /function\s*(.+?)\((.+?)\)/g,
    /if\s*\((.+?)\)\s*{/g,
    /else if\s*\((.+?)\)\s*{/g,
    /else\s*{\s*/g,
    /console(.+?)\((.+?)\)/g,
    /alert\((.+?)\)/g,
    /prompt\((.+?)\)/g,
    /Math\.random\((.+?)\)/g,
    /Math\.floor\((.+?)\)/g,
    /Math\.ceil\((.+?)\)/g,
    /Math\.min\((.+?)\)/g,
    /Math\.max\((.+?)\)/g,
    /document\.createElement\((.+?)\)/g,
    /document\.(.+?)\.appendChild\((.+?)\)/g,
    /(.+?).replace\((.+?)\)/g,
    /\/\//g,
    /(.+?)\.textContent\s*=\s*(.+?)/g,
    /\/\*(.+?)\*\//g,
    /document\.addEventListener\((.+?), function\(\) \{/g,
    /forEach\((.+?) \=\> \{/g,
    /(.+?)\.includes\((.+?)\)/g,
    /(.+?)\.match\((.+?)\)/g,
    /(.+?)\.value ===/g,
    /(.+?)\.value ==/g,
    /(.+?)\.value =/g,
    /(.+?)\.value !===/g,
    /(.+?)\.value !==/g,
    /(.+?)\.value !=/g,
    /(.+?)\.value >/g,
    /(.+?)\.value </g,
    /(.+?)\.value \=\>/g,
    /(.+?)\.value <==/g,
    /(.+?)\.style ===/g,
    /(.+?)\.style ==/g,
    /(.+?)\.style =/g,
    /(.+?)\.style !===/g,
    /(.+?)\.style !==/g,
    /(.+?)\.style !=/g,
    /(.+?)\.style >/g,
    /(.+?)\.style </g,
    /(.+?)\.style \=\>/g,
    /(.+?)\.style <==/g,
    /(.+?)\.style\.(.+?) =/g,
    /(.+?)\.style =/g,
    /(.+?)\.checked/g,
    /(.+?)\.required/g,
    /setTimeout\(function\(\) \{/g,
    /setInterval\(function\(\) \{/g,
    /for \((.+?)\) \{/g,
    /classList\.add\((.+?)\)/g,
    /switch\s*\((.+?)\)/g,
    /image\((.+?), (.+?)\)/g,
    /class\s*(.+?)\s*\{/g,
    /class\s*(.+?)\s*extends\s*(.+?)\s*\{/g,
    /constructor(.+?)\s*\{/g,
    /(.+?)\(\)\s*\{/g,
    /static(.+?)\s*\{/g,
    /typeof\s*(.+?)\s*(.+?)\s*(.+?)/g,
    /\.map\(function\((.+?)\)\s*\{/g,
    /\.filter\(function\((.+?)\)\s*\{/g,
    /\.reduce\(function\((.+?)\)\s*\{/g,
    /try\s*{/g,
    /}\s*catch\s*(.+?)\s*{/g,
    /}\s*finally\s*{/g,
  ];
  
  if (allowJs === "false") {
    const matches = patterns.map(pattern => {
      const match = variable.match(pattern);
      return match ? match[0] : null;
    }).filter(Boolean);
  
    if (matches.length > 0) {
      parsingMsg = "Invalid function '" + matches.join("', '") + "'";
      const error = new Error(parsingMsg);
      console.error(error);
      return "false";
    } else {
      parsingMsg = "";
      return "true";
    }
  }
}

function parseCode(code) {
    const lines = code.split('\n');
    const output = [];
    const stack = [];
    
    const regex = {
        listener: /(.+?)\.listener/,
        classFunc: /(.+?)\(\)\:/,
        change: /(.+?)\.change\((.+?), \((.+?)\)\)\:/,
        map: /(.+?)\.map\((.+?)\)\:/,
        filter: /(.+?)\.filter\((.+?)\)\:/,
        forEach: /forEach\((.+?)\)\:/,
        func: /func\s*(.+?)\((.+?)\)/,
        blockStart: /^(if|elif|else|class|constructor|static|final|recovery|func)/,
    };

    for (let line of lines) {
        const trimmedLine = line.trim();

        if (regex.blockStart.test(trimmedLine)) {
            stack.push('block');
            output.push(line);
        } else if (regex.listener.test(trimmedLine) || regex.change.test(trimmedLine) || 
                   regex.map.test(trimmedLine) || regex.filter.test(trimmedLine) || regex.forEach.test(trimmedLine)) {
            stack.push('listener');
            output.push(line);
        } else if (regex.func.test(trimmedLine)) {
            stack.push('func');
            output.push(line);
        } else if (trimmedLine === 'end') {
            const indent = line.match(/^\s*/)[0];
            const lastBlock = stack.pop();
            output.push(lastBlock === 'listener' ? `${indent}});` : `${indent}}`);
        } else {
            output.push(line);
        }
    }

    return output.join('\n');
}

function addSemicolons(code) {
    const lines = code.split('\n');
    const output = [];
    
    const regex = {
        needsSemicolon: /^(var|const|return|throw|break|continue|.*\=.*|[^;{}]+\))$/,
        alreadyTerminated: /[:;{}]\s*$/
    };

    for (let line of lines) {
        const trimmedLine = line.trim();
        
        if (regex.needsSemicolon.test(trimmedLine) && !regex.alreadyTerminated.test(trimmedLine)) {
            output.push(line + ';');
        } else {
            output.push(line);
        }
    }

    return output.join('\n');
}
