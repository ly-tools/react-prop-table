'use strict';

require('should');
const Docer = require('../index');
const fs = require('fs');
const path = require('path');

describe('react-doc-md', () => {
  it('es5', () => {
    console.log(JSON.stringify(Docer(fs.readFileSync(path.join(__dirname, 'src', 'es5.jsx'))), null, 2));
  });
  it('es6', () => {
    console.log(JSON.stringify(Docer(fs.readFileSync(path.join(__dirname, 'src', 'es6.jsx'))), null, 2));
  });
});
