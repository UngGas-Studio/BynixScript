function assignReplace(codeMsg) {
  codeMsg = codeMsg.replace(/const\s([a-zA-Z_][a-zA-Z0-9_]*)\s=\s(.+?)/g, (match, p1, p2) => `const ${p1} = ${p2}`);
  codeMsg = codeMsg.replace(/const\s([a-zA-Z_][a-zA-Z0-9_]*)\s=\s(.+?);/g, (match, p1, p2) => `const ${p1} = ${p2};`);
  codeMsg = codeMsg.replace(/const\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?)/g, (match, p1, p2) => `const ${p1} = ${p2}`);
  codeMsg = codeMsg.replace(/const\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+?);/g, (match, p1, p2) => `const ${p1} = ${p2};`);
  return codeMsg
}

module.exports = { assignReplace }