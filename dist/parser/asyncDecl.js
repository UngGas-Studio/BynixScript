function asyncReplace(codeMsg) {
  codeMsg = codeMsg.replace(/delay\:\n(.+?)/g, (match, p1) => `setTimeout(function() {\n    ${p1}`);
  codeMsg = codeMsg.replace(/repeat\:\n(.+?)/g, (match, p1) => `setInterval(function() {\n    ${p1}`);
  codeMsg = codeMsg.replace(/delay\:\s*(.+?)/g, (match, p1) => `setTimeout(function() {\n    ${p1}`);
  codeMsg = codeMsg.replace(/repeat\:\s*(.+?)/g, (match, p1) => `setInterval(function() {\n    ${p1}`);
  return codeMsg
}

module.exports = { asyncReplace }