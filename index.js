var bHtml = require('b-html');
var through = require('through2');
var jsStringEscape = require('js-string-escape');

module.exports = function(file) {
  if (!/\.bhtml$/).test(file)) {
    return through();
  }

  return through(function(chunk, encoding, callback) {
    var template = jsStringEscape(bHtml(chunk));
    callback(null, "module.exports = '" + template + "';");
  });
};
