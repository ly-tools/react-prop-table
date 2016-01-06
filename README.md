# react-prop-table

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/react-prop-table.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/react-prop-table?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/react-prop-table.png)](https://travis-ci.org/LingyuCoder/react-prop-table)
[![Dependency Status](https://david-dm.org/LingyuCoder/react-prop-table.svg)](https://david-dm.org/LingyuCoder/react-prop-table)
[![devDependency Status](https://david-dm.org/LingyuCoder/react-prop-table/dev-status.svg)](https://david-dm.org/LingyuCoder/react-prop-table#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/react-prop-table.svg?style=flat-square)](http://npmjs.org/package/react-prop-table)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/react-prop-table.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/react-prop-table.svg?style=flat-square)](https://npmjs.org/package/react-prop-table)

Parse react source file and generate html or markdown or cli table

## Install

```bash
$ npm install --save react-prop-table
```

```javascript
const Docer = require('react-doc-md');
Docer.html(source, config);
Docer.markdown(source, config);
Docer.cli(source, config);
```

## Usage

### ES5 Example

See [ES5 source example](test/src/es5.jsx)

### ES6 Example

See [ES6 source example](test/src/es6.jsx)

### `Docer.html(source, config)`

* source:String => JSX source code
* config:Object => configuration
  * config.tidy:Boolean => Tidy the result html or not
  * config.headers:Array(Object) => Headers config
    * header.name:String => key in data object
    * header.align:Enum('left'|'right'|'center') => text align of the column
    * header.title:String => title of the column

```javascript
const Docer = require('react-prop-table');
Docer.html(source);
```

Result see [HTML table](test/result/table.html)

### `Docer.markdown(source, config)`

* source:String => JSX source code
* config:Object => configuration
  * config.headers:Array(Object) => Headers config
    * header.name:String => key in data object
    * header.align:String => text align of the column
    * header.title:String => title of the column

```javascript
const Docer = require('react-prop-table');
Docer.markdown(source);
```

Result see [markdown table](test/result/table.md)

### `Docer.cli(source, config)`

* source:String => JSX source code
* config:Object => configuration
  * config.headers:Array(Object) => Headers config
    * header.name:String => key in data object
    * header.align:String => text align of the column
    * header.title:String => title of the column
    * header.width:Number => Width of the column

```javascript
const Docer = require('react-prop-table');
Docer.cli(source);
```

Result see [cli table](test/result/table.cli)

## Test

```bash
$ npm run test
$ npm run test-cov
$ npm run test-travis
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
