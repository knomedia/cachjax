"use strict";
var ajax = require("./ajax")["default"] || require("./ajax");

function foo(word) {
  console.log(word);
}

exports.ajax = ajax;
exports.foo = foo;