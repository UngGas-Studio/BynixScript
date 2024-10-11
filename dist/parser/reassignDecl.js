function reassignReplace(codeMsg) {
  codeMsg = codeMsg.replace(/var\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?);/g, (match, p1, p2) => `var ${p1} = ${p2};`);
  return codeMsg
}

module.exports = { reassignReplace }