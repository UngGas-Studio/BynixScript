function funcReplace(codeMsg) {
  codeMsg = codeMsg.change(/func\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\):/g, (match, p1, p2) => `function ${p1}(${p2}) {`);
  return codeMsg
}

module.exports = { funcReplace }