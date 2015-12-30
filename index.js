'use strict';

const getValueInfo = require('./lib/getValueInfo');
const tablify = require('./lib/mdtableify');

module.exports = source => {
  return tablify(getValueInfo(source), [{
    name: 'name',
    align: 'left'
  }, {
    name: 'description',
    align: 'left'
  }, {
    name: 'type',
    align: 'center'
  }, {
    name: 'required',
    align: 'center'
  }, {
    name: 'defaultValue',
    align: 'center'
  }]);
};
