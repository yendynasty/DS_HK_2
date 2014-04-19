/*
Theme Loader for iPython Notebooks

Until iPython develops an official way of adding themes to iPython Notebooks,
this hack will allow you to load custom CSS and JS in any ipython notebook viewer.

Just include the following in the first cell

%%javascript
$.getScript("http://localhost:8000/custom.js")

*/
// Hide the theme Cell
$('#notebook .cell:first').hide()

var base_url = 'http://localhost:8000/'
var css_url = base_url + 'custom.css'

$('<link>')
  .appendTo($('head'))
  .attr({type : 'text/css', rel : 'stylesheet'})
  .attr('href', css_url);


// Insert stylised elements

$('<img>')
  .prependTo($('h1'))
  .attr({src : 'assets/nodes.png', alt : 'break', class : 'lead'});
