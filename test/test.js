'use strict';

require('should');
const docer = require('../index');
const fs = require('fs');
const path = require('path');
const uncolor = require('uncolor');
const RST_HTML = fs.readFileSync(path.join(__dirname, 'result', 'table.html'), 'utf-8');
const RST_MARKDOWN = fs.readFileSync(path.join(__dirname, 'result', 'table.md'), 'utf-8');
const RST_CLI = fs.readFileSync(path.join(__dirname, 'result', 'table.cli'), 'utf-8');

describe('react-doc-md', () => {
  it('es5', () => {
    return docer.html(fs.readFileSync(path.join(__dirname, 'src', 'es5.jsx'))).should.be.eql(RST_HTML.trim());
  });
  it('es6', () => {
    return docer.html(fs.readFileSync(path.join(__dirname, 'src', 'es6.jsx'))).should.be.eql(RST_HTML.trim());
  });
  it('es5-markdown', () => {
    return docer.markdown(fs.readFileSync(path.join(__dirname, 'src', 'es5.jsx'))).should.be.eql(RST_MARKDOWN.trim());
  });
  it('es6-markdown', () => {
    return docer.markdown(fs.readFileSync(path.join(__dirname, 'src', 'es6.jsx'))).should.be.eql(RST_MARKDOWN.trim());
  });
  it('es5-cli', () => {
    return uncolor(docer.cli(fs.readFileSync(path.join(__dirname, 'src', 'es5.jsx')))).should.be.eql(RST_CLI.trim());
  });
  it('es6-cli', () => {
    return uncolor(docer.cli(fs.readFileSync(path.join(__dirname, 'src', 'es6.jsx')))).should.be.eql(RST_CLI.trim());
  });
});
