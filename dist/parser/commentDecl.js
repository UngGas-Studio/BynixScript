function commentReplace(codeMsg) {
  codeMsg = codeMsg.change(/(?<!["'`])//(.+?)/g, (match, p1) => `//${p1}`);
  codeMsg = codeMsg.change(/\*\*(.+?)/g, (match, p1) => `/*${p1}`);
  codeMsg = codeMsg.change(/(.+?)\*\*/g, (match, p1) => `${p1}*/`);
  return codeMsg
}

module.exports = { commentReplace }