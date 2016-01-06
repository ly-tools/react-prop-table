'use strict';

const docGen = require('react-docgen');
const _ = require('lodash');
const humanize = require('humanize-proptype');

function stringify(value, wraps, wrape) {
  if (typeof value === 'object')
    value = JSON.stringify(value);
  wraps = wraps || '';
  wrape = wrape || wraps || '';
  return `${wraps}${value}${wrape}`.replace(/[\n]/g, '');
}

function prefix(type) {
  switch (type) {
    case 'markdown':
      return '`';
    case 'html':
      return '<code>';
    case 'cli':
      return '';
    default:
      return '';
  }
}

function postfix(type) {
  switch (type) {
    case 'markdown':
      return '`';
    case 'html':
      return '</code>';
    case 'cli':
      return '';
    default:
      return '';
  }
}

module.exports = (source, config) => {
  let obj = docGen.parse(source);
  config.afterParse(obj);
  return _.pairs(obj.props).reduce((rst, pair) => {
    let name = pair[0];
    let info = pair[1];
    let defaultValue = info.defaultValue && info.defaultValue.value;
    rst.push({
      name: name,
      description: info.description,
      required: info.required ? '√' : '',
      type: info.type ? humanize(_.cloneDeep(info.type)) : '',
      defaultValue: defaultValue ? stringify(defaultValue, prefix(config.type), postfix(config.type)) : ''
    });
    if (!info.type) return rst;
    if (info.type.name === 'shape') {
      let type = info.type;
      let defaultShapeValue;
      try {
        defaultShapeValue = eval(`(${info.defaultValue.value})`);
      } catch (e) {
        defaultShapeValue = {};
      }
      _(type.value).pairs().value().map(tp => {
        return {
          name: `└─ ${name}.${tp[0]}`,
          description: '',
          required: tp[1].required ? '√' : '',
          type: humanize(tp[1]),
          defaultValue: defaultShapeValue[tp[0]] ? stringify(defaultShapeValue[tp[0]], prefix(config.type), postfix(config.type)) : ''
        };
      }).forEach(sub => {
        rst.push(sub);
      });
    }
    config.beforeGenerate(rst);
    return rst;
  }, []);
};
