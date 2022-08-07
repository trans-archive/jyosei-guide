const page = document.querySelector(".book-page");

page.addEventListener(
  "play",
  (event) => {
    if (event.target.tagName !== "AUDIO") return;
    const elements = event.currentTarget.getElementsByTagName("audio");
    Array.from(elements).forEach(function (element) {
      if (element === event.target) return;
      element.pause();
      element.currentTime = 0;
    });
  },
  { capture: true }
);

page.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName !== "A") return;
    if (!event.target.closest(".track-list")) return;
    event.preventDefault();
    event.stopPropagation();
    const href = event.target.href;
    const player = document.querySelector(".audio-player");
    player.querySelector("figcaption > b").textContent =
      event.target.dataset.caption;
    const audio = player.querySelector("audio");
    audio.src = href;
    audio.play();
  },
  { capture: true }
);
