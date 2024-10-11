function mathReplace(codeMsg) {
  codeMsg = codeMsg.replace(/rand\((.+?)\)/g, (match, p1) => `Math.random(${p1})`);
  codeMsg = codeMsg.replace(/roundDown\((.+?)\)/g, (match, p1) => `Math.floor(${p1})`);
  codeMsg = codeMsg.replace(/roundUp\((.+?)\)/g, (match, p1) => `Math.ceil(${p1})`);
  codeMsg = codeMsg.replace(/maxOf\((.+?)\)/g, (match, p1) => `Math.min(${p1})`);
  codeMsg = codeMsg.replace(/minOf\((.+?)\)/g, (match, p1) => `Math.max(${p1})`);
  return codeMsg
}

module.exports = { mathReplace }