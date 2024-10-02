const { defaultConfig, config, extensions, toFolder, readFolder, readAll, allowJs, translate } = require('./bsconfig.js');
let parsingMsg = "";

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
    /break\;/g,
    /default\;/g,
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
  ];
  
  if (allowJs === false) {
    const matches = patterns.map(pattern => {
      const match = variable.match(pattern);
      return match ? match[0] : null;
    }).filter(Boolean);
  
    if (matches.length > 0) {
      parsingMsg = "Invalid function '" + matches.join("', '") + "'";
      console.log(parsingMsg);
      return false;
    } else {
      parsingMsg = "";
      return true;
    }
  }
}

function parseCode(code) {
    const lines = code.split('\n');
    const output = [];
    let ifStack = 0;
    let inListener = false;
    let listenerRegex = /(.+?)\.listener/;
    let classRegex = /(.+?)\(\)\:/;
    let changeRegex = /(.+?)\.change\((.+?), \((.+?)\)\)\:/;
    let mapRegex = /(.+?)\.map\((.+?)\)\:/;
    let filterRegex = /(.+?)\.filter\((.+?)\)\:/;
    let forEachRegex = /forEach\((.+?)\)\:/;
    let classFuncRegex = /(.+?)\(\)\:/;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith('if') || trimmedLine.startsWith('elif') || trimmedLine.startsWith('else') || trimmedLine.startsWith('func') || trimmedLine.startsWith('class') || trimmedLine.startsWith('constructor') || trimmedLine.startsWith('static') || classRegex.test(trimmedLine) || trimmedLine.startsWith('match') || classFuncRegex.test(trimmedLine)) {
            ifStack++;
            output.push(line);
        } else if (trimmedLine.startsWith('listener') || listenerRegex.test(trimmedLine) || changeRegex.test(trimmedLine) || mapRegex.test(trimmedLine) || filterRegex.test(trimmedLine) || forEachRegex.test(trimmedLine)) {
            inListener = true;
            output.push(line);
        } else if (trimmedLine === 'end') {
            const indent = line.match(/^\s*/)[0];
            if (inListener) {
                output.push(`${indent}});`);
                inListener = false;
            } else if (ifStack > 0) {
                output.push(`${indent}` + '}');
                ifStack--;
            } else {
                output.push(line);
            }
        } else {
            output.push(line);
        }
    }

    return output.join('\n');
}

module.exports = { parsing, parseCode };