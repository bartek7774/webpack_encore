global.$ = global.jQuery = require('jquery');
require('bootstrap');

import './../sources/bootstrap/less/bootstrap.less';
import './../sources/font-awesome/less/font-awesome.less';

$(document).ready(function(){
  console.log('Base ok');
  $('h1').css({color:'red'});
});