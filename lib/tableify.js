'use strict';

const _ = require('lodash');

module.exports = function(data, sequence) {
  let header = sequence.map(name => `<th>${_.capitalize(name)}</th>`);
  let body = data.map(row => {
    let rowContent = sequence.map(name => `<td>${row[name] || ''}</td>`);
    return `<tr>${rowContent.join('')}</tr>`;
  });
  return `<table><thead><tr>${header.join('')}</tr></thead><tbody>${body.join('')}</tbody></table>`;
};
