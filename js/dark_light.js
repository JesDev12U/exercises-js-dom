export default function darkLight(btn, main, backBall) {
  const $btn = document.querySelector(`${btn} i`);
  const $main = document.querySelector(main);
  const $backBall = document.querySelector(backBall);
  const darkMode = () => {
    $main.classList.add("dark");
    $backBall.classList.add("dark");
    document.body.classList.add("body-dark");
    $btn.classList.remove("fa-moon");
    $btn.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  };

  const lightMode = () => {
    $main.classList.remove("dark");
    $backBall.classList.remove("dark");
    document.body.classList.remove("body-dark");
    $btn.classList.remove("fa-sun");
    $btn.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(`${btn} *`) || e.target.matches(btn)) {
      if ($btn.classList.contains("fa-moon")) darkMode();
      else lightMode();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");
    else if (localStorage.getItem("theme") === "light") lightMode();
    else if (localStorage.getItem("theme") === "dark") darkMode();
  });
}
