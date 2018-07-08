export default function attachShortcut(
  wordsCount = 40,
  className = "description",
  showElement = $("<span/>")
    .addClass("glyphicon glyphicon-arrow-right")
    .css({ cursor: "pointer", "margin-left": "5px" }),
  hideElement = $("<span/>")
    .addClass("glyphicon glyphicon-arrow-left")
    .css({ cursor: "pointer", "margin-left": "5px" }),
  speed = 200,
  eventType = "click"
) {
  className = className.replace(".", "");
  [].forEach.call($(`.${className}`), v => {
    if (
      $(v)
        .text()
        .trim()
        .split(" ").length > wordsCount
    ) {
      $(v)
        .before(
          $(`<${$("." + className)[0].tagName}/>`, {
            class: `__${className}`,
            text: $(v)
              .text()
              .trim()
              .split(" ")
              .slice(0, wordsCount)
              .join(" ")
          }).append(showElement.clone().addClass("__more"))
        )
        .append(hideElement.clone().addClass("__less"))
        .css("display", "none");
    }
  });
  assignShortcutEvents($("." + className)[0].tagName, eventType, speed);
}

function assignShortcutEvents(parentElement, eventType = "click", speed = 200) {
  $(".__more").one(eventType, function(e) {
    $(this).removeClass("animated");
  });
  $(".__more").bind(eventType, function(e) {
    $(e.target)
      .parents(parentElement)
      .hide();
    $(e.target)
      .parents(parentElement)
      .next()
      .show(speed);
  });
  $(".__less").bind(eventType, function(e) {
    $(e.target)
      .parents(parentElement)
      .prev()
      .show();
    $(e.target)
      .parents(parentElement)
      .hide(speed);
  });
}
