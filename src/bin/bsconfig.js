const fs = require('fs');

const defaultConfig = {
  extension: {
    primary: '.bs',
    secondary: '.bynixscript',
    module: '.mbs'
  },
  toFolder: './',
  translate: 'javascript'
};

let config;

try {
  const data = fs.readFileSync('./bsconfig.json', 'utf8');
  config = JSON.parse(data);
} catch (err) {
  config = defaultConfig;
}

const extensions = {
  primary: config.extension?.primary || defaultConfig.extension.primary,
  secondary: config.extension?.secondary || defaultConfig.extension.secondary,
  module: config.extension?.module || defaultConfig.extension.module
};

const toFolder = config.toFolder || defaultConfig.toFolder;
const translate = config.translate || defaultConfig.translate;

module.exports = { defaultConfig, config, extensions, toFolder, translate };
