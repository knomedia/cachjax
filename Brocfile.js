var makeModules = require('broccoli-dist-es6-module');

module.exports = makeModules('lib', {
  global: 'cachjax',
  packageName: 'cachjax',
  main: 'main'
});
