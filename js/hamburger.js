export default function hamburgerFunction($btn, $nav, $div) {
  const button = document.querySelector($btn);
  const nav = document.querySelector($nav);
  document.addEventListener("click", (e) => {
    if (e.target.matches(`${$div} *`) || e.target.matches(`${$nav} ul li a`)) {
      button.classList.toggle("is-active");
      if (button.classList.contains("is-active")) {
        nav.classList.remove("invisible");
        nav.classList.add("visible");
      } else {
        nav.classList.remove("visible");
        nav.classList.add("invisible");
      }
    }
  });
}
