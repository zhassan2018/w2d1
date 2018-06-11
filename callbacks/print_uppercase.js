var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
	toSend = html.toUpperCase();
  console.log(toSend + "\n");
}

getHTML(requestOptions, printUpperCase)