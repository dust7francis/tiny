# @dust7francis/tiny

Replace two or more spaces to single space from a string.

## Install

```
$ npm install @dust7francis/tiny
```

## Usage

```js
const tiny = require("@dust7francis/tiny")

tiny("Too   much  space!");
// => "Too much space!"

tiny(123)
// => Uncaught TypeError: Please provide a string stead.

```