'use strict';

const getValueInfo = require('./lib/getValueInfo');
const _ = require('lodash');
const htmlTableify = require('html-tableify');
const markdownTableify = require('markdown-tableify');
const cliTableify = require('cli-table2');
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
const DEFAULT_CLI_CONFIG = {
  type: 'cli',
  headers: [{
    name: 'name',
    width: 20,
    align: 'left'
  }, {
    name: 'description',
    width: 30,
    align: 'left'
  }, {
    name: 'type',
    width: 20,
    align: 'center'
  }, {
    name: 'required',
    width: 10,
    align: 'center'
  }, {
    name: 'defaultValue',
    width: 20,
    title: 'Default Value',
    align: 'center'
  }],
  afterParse: () => {},
  beforeGenerate: () => {}
};

module.exports = {
  html: (source, config) => {
    config = _.defaults(config || {}, DEFAULT_HTML_CONFIG);
    return htmlTableify(getValueInfo(source, config), config);
  },
  markdown: (source, config) => {
    config = _.defaults(config || {}, DEFAULT_MARKDOWN_CONFIG);
    return markdownTableify(getValueInfo(source, config), config);
  },
  cli: (source, config) => {
    config = _.defaults(config || {}, DEFAULT_CLI_CONFIG);
    let table = new cliTableify({
      head: config.headers.map(header => header.title || _.capitalize(header.name)),
      colWidths: config.headers.map(header => header.width || 200),
      colAligns: config.headers.map(header => header.align || 'left'),
      wordWrap: true
    });
    getValueInfo(source, config).forEach(row => table.push(config.headers.map(header => row[header.name] || '')));
    return table.toString();
  }
};
