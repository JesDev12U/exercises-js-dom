export default function upScroll(up) {
  const $up = document.querySelector(up);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 117) {
      $up.classList.add("visible");
    } else {
      $up.classList.remove("visible");
    }
  });
}
