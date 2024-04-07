export default function videoSpy() {
  const $videos = document.querySelectorAll(`video[video-scroll-spy]`);
  console.log($videos);
  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      window.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible" && entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: [0.5, 0.75],
  });
  $videos.forEach((el) => observer.observe(el));
}
