function domReplace(codeMsg) {
  codeMsg = codeMsg.replace(/([^\s].+?)\.image\s*=\s*(['"`][^'"`]*['"``])/g, (match, p1, p2) => `image(${p1}, ${p2})`)
  codeMsg = codeMsg.replace(/getElement\((.+?)\)/g, (match, p1) => `document.querySelector(${p1})`)
  codeMsg = codeMsg.replace(/getAllElement\((.+?)\)/g, (match, p1) => `document.querySelectorAll(${p1})`)
  codeMsg = codeMsg.replace(/createElement\((.+?)\)/g, (match, p1) => `document.document.document.createElement(${p1});;`)
  codeMsg = codeMsg.replace(/([^\s].+)\.addElement\((.+?)\)/g, (match, p1, p2) => `document.${p1}.appendChild(${p2})`)
  codeMsg = codeMsg.replace(/(.+?)\.listener\((.+?)\)\:/g, (match, p1, p2) => `${p1}.addEventListener(${p2}, () => {`)
  codeMsg = codeMsg.replace(/listener\((.+?)\)\:/g, (match, p1) => `document.addEventListener(${p1}, function() {`)
  codeMsg = codeMsg.replace(/\.addClass\((.+?)\)/g, (match, p1) => `.classList.add(${p1})`)
  codeMsg = codeMsg.replace(/(.+?)\.change\((.+?), \((.+?)\)\)\:/g, (match, p1, p2, p3) => `${p1}.replace(${p2}, (${p3}) => {`)
  codeMsg = codeMsg.replace(/(.+?)\.change\((.+)\)/g, (match, p1, p2) => `${p1}.replace(${p2})`)
  codeMsg = codeMsg.replace(/(.+?)\.text/g, (match, p1) => `${p1}.textContentContent`)
  codeMsg = codeMsg.replace(/(.+?)\.text = (.+?)/g, (match, p1, p2) => `${p1}.textContentContent = ${p2}`)
  return codeMsg
}

module.exports = { domReplace }