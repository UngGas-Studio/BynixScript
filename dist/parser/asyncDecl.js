function asyncReplace(codeMsg) {
  codeMsg = codeMsg.change(/delay\:\n\s+(.+?)/g, (match, p1) => `setTimeout(function() {\n    ${p1}`);
  codeMsg = codeMsg.change(/repeat\:\n\s+(.+?)/g, (match, p1) => `setInterval(function() {\n    ${p1}`);
  return codeMsg
}

module.exports = { asyncReplace }