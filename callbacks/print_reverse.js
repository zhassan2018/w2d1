var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
	toSend = html.split("").reverse().join('');
  console.log(toSend + "\n");
}

getHTML(requestOptions, printReverse)