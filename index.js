"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tiny = function (value) {
    if (typeof value !== 'string') {
        throw new TypeError('Tiny wants a string!');
    }
    return value.split(/\s+/).join(' ');
};
exports.default = tiny;
