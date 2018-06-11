function getAndPrintHTML (options) {

 
  /* Add your code here */
  var https = require('https');
  var received =[];

https.get(options, function(response){
	response.on('data', function(data){
		received.push(data);
	})

	response.on('end', function(){
		for (var i = 0; i < received.length; i++){
			console.log(received[i] + "\n")
		}
	})
}

)

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);