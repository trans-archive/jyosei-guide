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

var trackList = document.querySelector(".track-list");
if (trackList) {
  trackList.addEventListener("click", function (event) {
    if (event.target.tagName !== "A") return;
    event.preventDefault();
    event.stopPropagation();
    var href = event.target.href;

    var player = document.querySelector(".audio-player");

    player.querySelector("figcaption > b").textContent =
      event.target.dataset.caption;

    var audio = player.querySelector("audio");
    audio.src = href;
    audio.play();
  });
}
