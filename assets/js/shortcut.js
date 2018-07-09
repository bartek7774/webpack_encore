// assets/js/app.js
import '../less/app.less';
import shortcut from './helpers/shortcut-core.js';

$(document).ready(function(){
  let x=123;
  console.log(`Hello form ${x}`);
  shortcut(10,'description');
});