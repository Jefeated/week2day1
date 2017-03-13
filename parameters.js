var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  /* Add your code here */
  var chunk = '';
  var options = {
  host: requestOptions.host,
  path: requestOptions.path
  };

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data) {
      chunk += data;
    });
    response.on('end', function() {
      console.log(chunk);
    });
    response.on('error', function(err) {
      console.log('404');
    });
  });
};
getAndPrintHTML ();


