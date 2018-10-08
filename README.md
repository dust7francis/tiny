# @dust7francis/tiny

Replace two or more spaces to single space from a string.

## Install

```
$ npm install dust7francis/tiny
```

## Usage

```js
const tiny = require("@dust7francis/tiny")

tiny("Too   much  space!");
// => "Too much space!"

tiny(123)
// => Uncaught TypeError: Tiny wants a string!

```

## Tutorial

This repo is built after a 8 min read of [How to make a beautiful, tiny npm package and publish it](https://medium.freecodecamp.org/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78)


## LIcense 
MIT