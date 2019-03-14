const fs = require('fs');
const path = require('path');

const packagesPath = path.resolve(__dirname, '../src/packages');
const external = [];

module.exports = function () {
  return fs.readdirSync(packagesPath)
    .filter(dirName => !external.includes(dirName));
};
