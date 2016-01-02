'use strict';

const getValueInfo = require('./lib/getValueInfo');
const _ = require('lodash');
const htmlTableify = require('html-tableify');
const markdownTableify = require('markdown-tableify');
const DEFAULT_MARKDOWN_CONFIG = {
  type: 'markdown',
  afterParse: () => {},
  beforeGenerate: () => {},
  headers: [{
    name: 'name',
    align: ':---'
  }, {
    name: 'description',
    align: ':-----'
  }, {
    name: 'type',
    align: ':---'
  }, {
    name: 'required',
    align: ':---:'
  }, {
    name: 'defaultValue',
    align: ':---:',
    title: 'Default Value'
  }]
};
const DEFAULT_HTML_CONFIG = {
  type: 'html',
  tidy: true,
  afterParse: () => {},
  beforeGenerate: () => {},
  headers: [{
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
    align: 'center',
    title: 'Default Value'
  }]
};

module.exports = {
  html: (source, config) => {
    config = _.defaults(config || {}, DEFAULT_HTML_CONFIG);
    return htmlTableify(getValueInfo(source, config), config);
  },
  markdown: (source, config) => {
    config = _.defaults(config || {}, DEFAULT_MARKDOWN_CONFIG);
    return markdownTableify(getValueInfo(source, config), config);
  }
};
