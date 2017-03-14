var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

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
    printHTML(chunk);
  });
}

function printHTML (html) {
  console.log(html);
}
getHTML(printHTML);

module.exports = function getHTML (options, callback) {
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
    printHTML(chunk);
  });
}
