# b-htmlify

[b-html](https://github.com/b-html/b-html) precompiler for [browserify](http://browserify.org/).

## Installation

```
$ npm install b-htmlify
```

## Usage

```javascript
var template = require("./template.bhtml");
document.body.innerHTML = template();
```

```
$ browserify -t b-htmlify main.js > bundle.js
```

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
