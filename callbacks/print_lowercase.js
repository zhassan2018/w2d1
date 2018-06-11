var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
	toSend = html.toLowerCase();
  console.log(toSend + "\n");
}

getHTML(requestOptions, printLowerCase)