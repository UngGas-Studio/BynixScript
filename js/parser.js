const { defaultConfig, config, extensions, toFolder, readFolder, readAll, allowJs, translate } = require('./bsc.js');
let parsingMsg = {
  message: ""
};

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
  
  if (allowJs === false) {
    const matches = patterns.map(pattern => {
      const match = variable.match(pattern);
      return match ? match[0] : null;
    }).filter(Boolean);
  
    if (matches.length > 0) {
      parsingMsg.message = "Invalid function '" + matches.join("', '") + "'";
      return false;
    } else {
      parsingMsg.message = "";
      return true;
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
        } else if (regex.listener.test(trimmedLine) || regex.change.test(trimmedLine) || regex.map.test(trimmedLine) || regex.filter.test(trimmedLine) || regex.forEach.test(trimmedLine)) {
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

module.exports = { parsingMsg, parsing, parseCode, addSemicolons };