const fs = require('fs');

const defaultConfig = {
  extension: {
    primary: '.bs',
    secondary: '.bynixscript',
    module: '.mbs'
  },
  readFolder: './',
  toFolder: './',
  readAll: false,
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

const readFolder = config.readFolder || defaultConfig.readFolder;
const toFolder = config.toFolder || defaultConfig.toFolder;
const readAll = config.readAll || defaultConfig.readAll;
const translate = config.translate || defaultConfig.translate;

module.exports = { defaultConfig, config, extensions, toFolder, readFolder, readAll, translate };
