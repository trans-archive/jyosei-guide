Array.from(document.getElementsByTagName("audio")).forEach(function (
  element,
  index,
  elements
) {
  element.addEventListener("play", function () {
    var self = this;
    elements.forEach(function (element) {
      if (element === self) return;
      element.pause();
      element.currentTime = 0;
    });
  });
});
