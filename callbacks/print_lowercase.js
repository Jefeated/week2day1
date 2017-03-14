var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {

  /* Write your code here! */
var upperCase = html.toLowerCase();
console.log(upperCase);
}

getHTML(requestOptions, printLowerCase);