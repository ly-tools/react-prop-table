'use strict';

const docGen = require('react-docgen');
const _ = require('lodash');
const getTypeStr = require('./getTypeStr');

function stringify(value) {
  if (typeof value === 'object')
    value = JSON.stringify(value);
  return `\`${value}\``.replace(/[\n]/g, '');
}

module.exports = source => {
  let obj = docGen.parse(source);
  return _.pairs(obj.props).reduce((rst, pair) => {
    let name = pair[0];
    let info = pair[1];
    rst.push({
      name: name,
      description: info.description,
      required: info.required ? '√' : '',
      type: info.type ? getTypeStr(info.type) : '',
      defaultValue: stringify(info.defaultValue.value)
    });
    if (info.type.name === 'shape') {
      let type = info.type;
      let defaultValue;
      try {
        defaultValue = eval(`(${info.defaultValue.value})`);
      } catch (e) {
        defaultValue = {};
      }
      _(type.value).pairs().value().map(tp => {
        return {
          name: `└─ ${name}.${tp[0]}`,
          type: tp[1].name,
          required: tp[1].required ? '√' : '',
          defaultValue: stringify(defaultValue[tp[0]])
        };
      }).forEach(sub => {
        rst.push(sub);
      });
    }
    return rst;
  }, []);
};
