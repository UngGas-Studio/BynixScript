function stackParsing(filename, errorMsg, errorStack, code, type, modulLocation) {
  if (code !== undefined && code !== null) {
    const stackLines = errorStack.split('\n');
    let codeLines = code.split('\n');
    
    const errorLine = stackLines[0];
    const parts = errorLine.split(':');
    let line;
    let column
    let tabs;
    let arrow;
    let errorCode;
    if (type === "SyntaxError") {
      const errorLine = stackLines[0];
      const parts = errorLine.split(':');
      line  = parseInt(parts[1].trim());
      let l = line - 2;
      errorCode = codeLines[l].trim();
      
      return `${type}: ${errorMsg}\n  at file ${filename}\n\nSnippet:\n${errorCode}\n`;
    } else if (type === "TypeError" || type === "ReferenceError" || type === "RangeError" || type === "URIError" || type === "EvalError") {
      const errorLine = stackLines[5];
      const parts = errorLine.split(':');
      line  = parseInt(parts[1].trim());
      column = parseInt(parts[2].trim());
      
      if (column > 6) {
        column -= 6;
      }
      
      let l = line - 1;
      const codeNoTrim = codeLines[l]
      errorCode = codeLines[l].trim();
      const spaces = codeNoTrim.match(/^ +/);
      const spacesCount = spaces ? spaces[0].length : 0;
      let x = column - spacesCount - 1;
      if (x < 0) {
        x = Math.abs(x);
        x -= 2;
      }
      tabs = ' '.repeat(x);
      arrow = tabs + '^';
      
      return `${type}: ${errorMsg}\n  at file ${filename}\n  at line ${line}, column ${column}\n\nSnippet:\n${errorCode}\n${arrow}`;
    } else {
      let commonErr = errorMsg
      commonErr = commonErr.replace(/\sstack/g, '');
      commonErr = commonErr.replace(/bst\.js/g, filename);
      commonErr = commonErr.replace(/bsr\.js/g, filename);
      commonErr = commonErr.replace(/bsp\.js/g, filename);
      return `${type}: ${commonErr}`;
    }
  } else {
    return errorMsg;
  }
}

module.exports = { stackParsing };