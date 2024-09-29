let parsingMsg = "";

function parsing(variable) {
  const patterns = [
    /let\s(.+?)=(.+?)/g,
    /function\s(.+?)\((.+?)\)/g,
    /if\s\((.+?)\)\s{/g,
    /else if\s\((.+?)\)\s{/g,
    /else\s{\s/g,
    /console(.+?)\((.+?)\)/g,
    /alert\((.+?)\)/g,
    /prompt\((.+?)\)/g,
    /Math\.random\((.+?)\)/g,
    /Math\.floor\((.+?)\)/g,
    /Math\.ceil\((.+?)\)/g,
    /Math\.min\((.+?)\)/g,
    /Math\.max\((.+?)\)/g,
    /document\.createElement\((.+?)\)/g,
    /document\.(.+?)\.appendChild\((.+?)\)/g,
    /(.+?).replace\((.+?)\)/g,
    /\/\//g,
    /(.+?)\.textContent\s=\s(.+?)/g,
    /\/\*(.+?)\*\//g,
    /document\.addEventListener\((.+?), function\(\) \{/g,
    /forEach\((.+?) \=\> \{/g,
    /(.+?)\.includes\((.+?)\)/g,
    /(.+?)\.match\((.+?)\)/g,
    /(.+?)\.value ===/g,
    /(.+?)\.value ==/g,
    /(.+?)\.value =/g,
    /(.+?)\.value !===/g,
    /(.+?)\.value !==/g,
    /(.+?)\.value !=/g,
    /(.+?)\.value >/g,
    /(.+?)\.value </g,
    /(.+?)\.value \=\>/g,
    /(.+?)\.value <==/g,
    /(.+?)\.style ===/g,
    /(.+?)\.style ==/g,
    /(.+?)\.style =/g,
    /(.+?)\.style !===/g,
    /(.+?)\.style !==/g,
    /(.+?)\.style !=/g,
    /(.+?)\.style >/g,
    /(.+?)\.style </g,
    /(.+?)\.style \=\>/g,
    /(.+?)\.style <==/g,
    /(.+?)\.style\.(.+?) =/g,
    /(.+?)\.style =/g,
    /(.+?)\.checked/g,
    /(.+?)\.required/g,
    /setTimeout\(function\(\) \{/g,
    /setInterval\(function\(\) \{/g,
    /for \((.+?)\) \{/g,
    /classList\.add\((.+?)\)/g,
    /switch\s\((.+?)\)/g,
    /break\;/g,
    /default\;/g,
    /image\((.+?), (.+?)\)/g,
    /class\s(.+?)\s\{/g,
    /class\s(.+?)\sextends\s(.+?)\s\{/g,
    /constructor(.+?)\s\{/g,
    /speak(.+?)\s\{/g,
    /static(.+?)\s\{/g,
    /typeof\s(.+?)\s(.+?)\s(.+?)/g,
    /\.map\(function\((.+?)\)\s\{/g,
    /\.filter\(function\((.+?)\)\s\{/g,
    /\.reduce\(function\((.+?)\)\s\{/g,
  ];

  const matches = patterns.map(pattern => {
    const match = variable.match(pattern);
    return match ? match[0] : null;
  }).filter(Boolean);

  if (matches.length > 0) {
    parsingMsg = "Invalid function '" + matches.join(", ") + "'";
    console.log(parsingMsg);
    return false;
  } else {
    parsingMsg = "";
    return true;
  }
}

module.exports = { parsing, parsingMsg };
