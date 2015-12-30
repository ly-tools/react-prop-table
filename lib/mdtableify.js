'use strict';

const _ = require('lodash');

function align(hd) {
  switch (hd.align) {
    case 'left':
      return ':--';
    case 'right':
      return '--:';
    default:
      return ':--:';
  }
}

module.exports = function(data, headers) {
  let header = headers.map(hd => `${_.capitalize(hd.name)}`);
  let body = data.map(row => {
    let rowContent = headers.map(hd => `${row[hd.name] || ''}`);
    return `|${rowContent.join('|')}|`;
  });
  return `\n|${header.join('|')}|\n|${headers.map(align).join('|')}|\n${body.join('\n')}\n`;
};
