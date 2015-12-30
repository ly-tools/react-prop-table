'use strict';

const _ = require('lodash');

module.exports = function(data, headers) {
  let header = headers.map(hd => `${_.capitalize(hd.name)}`);
  let body = data.map(row => {
    let rowContent = headers.map(hd => `${row[hd.name] || ''}`);
    return `|${rowContent.join('|')}|`;
  });
  return `\n|${header.join('|')}|\n|${headers.map(hd => hd.align).join('|')}|\n${body.join('\n')}\n`;
};
