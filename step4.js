function getHTML (options, callback) {

  /* Add your code here */

    var https = require('https');
    var received =[];

  https.get(options, function(response){
  	response.on('data', function(data){
  		received.push(data);
  	})

  	response.on('end', function(){
  		callback(received)
  	})
  }

  )

}

function printHTML (html) {
  console.log(html + "\n");
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)
