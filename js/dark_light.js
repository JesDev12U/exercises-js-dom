export default function darkLight(btn, main, backBall) {
  const $btn = document.querySelector(`${btn} i`);
  document.addEventListener("click", (e) => {
    if (e.target.matches(`${btn} *`) || e.target.matches(btn)) {
      document.querySelector(main).classList.toggle("dark");
      document.querySelector(backBall).classList.toggle("dark");

      if ($btn.classList.contains("fa-moon")) {
        $btn.classList.remove("fa-moon");
        $btn.classList.add("fa-sun");
      } else {
        $btn.classList.remove("fa-sun");
        $btn.classList.add("fa-moon");
      }
    }
  });
}
