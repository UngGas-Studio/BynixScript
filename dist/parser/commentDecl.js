function commentReplace(codeMsg) {
  codeMsg = codeMsg.replace(/(?<!["'`])#(?!\!)(.+?)/g, (match, p1) => `//${p1}`);
  codeMsg = codeMsg.replace(/\*\*(.+?)/g, (match, p1) => `/*${p1}`);
  codeMsg = codeMsg.replace(/(.+?)\*\*/g, (match, p1) => `${p1}*/`);
  return codeMsg
}

module.exports = { commentReplace }