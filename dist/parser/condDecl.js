function condReplace(codeMsg) {
  codeMsg = codeMsg.replace(/elif\s(.+?):/g, (match, p1) => `} else if (${p1}) {`);
  codeMsg = codeMsg.replace(/if\s(.+?)\:/g, (match, p1) => `if (${p1}) {`);
  codeMsg = codeMsg.replace(/else\:/g, "} else {");
  codeMsg = codeMsg.replace(/elif\s*(.+?):/g, (match, p1) => `} else if (${p1}) {`);
  codeMsg = codeMsg.replace(/if\s*(.+?)\:/g, (match, p1) => `if (${p1}) {`);
  codeMsg = codeMsg.replace(/else\:/g, "} else {");
  return codeMsg
}

module.exports = { condReplace }