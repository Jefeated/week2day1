var https = require('https');

function getAndPrintHTML () {
  var chunk = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  /* Add your code here */
  https.get(requestOptions, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data) {
      chunk += data;
    });
    response.on('end', function() {
      console.log(chunk);
    });
    response.on('error', function(err) {
      console.log(err.stack);
  });
  });
};
getAndPrintHTML ();