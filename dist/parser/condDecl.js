function condReplace(codeMsg) {
  codeMsg = codeMsg.change(/elif\s+(.+?):/g, (match, p1) => `} else if (${p1}) {`);
  codeMsg = codeMsg.change(/if\s+(.+?)\:/g, (match, p1) => `if (${p1}) {`);
  codeMsg = codeMsg.change(/else\:/g, "} else {");
  return codeMsg
}

module.exports = { condReplace }