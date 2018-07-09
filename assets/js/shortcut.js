// assets/js/app.js
import "../less/shortcut.less";
import shortcut from "./helpers/shortcut-core.js";

$(document).ready(function() {
  var down = $("<button/>", {
    class: "btn btn-block btn-default infinite pulse animated button-square"
  }).append(
    $("<span/>").addClass("glyphicon glyphicon-chevron-down span-round-down")
  );

  var up = $("<button/>", {
    class: "btn btn-block btn-default button-square"
  }).append(
    $("<span/>").addClass("glyphicon glyphicon-chevron-up span-round-up")
  );

  shortcut(20, "description", down, up);
});
