var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
var upperCase = html.toUpperCase();
console.log(upperCase);
}

getHTML(requestOptions, printUpperCase);