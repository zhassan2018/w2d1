module.exports = function getHTML (options, callback) {
    /* Your code here */
      var https = require('https');
      var received ='';

    https.get(options, function(response){
    	response.on('data', function(data){
    		received += data;
    	})

    	response.on('end', function(){
    		callback(received)
    	})
    }

    )



};




