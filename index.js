'use strict';

const getValueInfo = require('./lib/getValueInfo');
const tablify = require('./lib/mdtableify');

module.exports = source => {
  return tablify(getValueInfo(source), [{
    name: 'name',
    align: ':---'
  }, {
    name: 'description',
    align: ':---'
  }, {
    name: 'type',
    align: ':---:'
  }, {
    name: 'required',
    align: ':---:'
  }, {
    name: 'defaultValue',
    align: ':---:'
  }]);
};
