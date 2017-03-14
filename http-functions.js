

module.exports = function getHTML (options, callback) {
  var https = require('https');
  var chunk = '';
  var requestOptions = {
  host: options.host,
  path: options.path
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
