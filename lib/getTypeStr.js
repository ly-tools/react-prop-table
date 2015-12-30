'use strict';


function getTypeStr(type) {
  switch (type.name) {
    case 'instanceOf':
      return `Class:${type.value}`;
    case 'enum':
      return type.value.map(v => `\`${v.value}\``).join(' or ');
    case 'union':
      return type.value.map(t => `${getTypeStr(t)}`).join(' or ');
    case 'arrayOf':
      return `Array:${getTypeStr(type.value)}`;
    case 'custom':
      if (type.raw.indexOf('function') !== -1 || type.raw.indexOf('=>') !== -1)
        return `Custom:Function`;
      else if (type.raw.indexOf('objectOf') !== -1)
        return `Custom:${type.raw.replace(/React\.PropTypes\./, '')}`;
      return `Custom`;
    default:
      return type.name;
  }
}

module.exports = getTypeStr;
