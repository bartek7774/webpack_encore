// assets/js/app.js
import '../less/app.less';
import test from './helpers/shortcut.js';

$(document).ready(function(){
  let x=123;
  console.log(`Hello form ${x}`);
  test(10,'description');
});