export default function ballFun(ball) {
  let top = 50;
  let left = 50;
  const $ball = document.querySelector(ball);
  document.addEventListener("keypress", (e) => {
    if (e.key === "w" && top > 0) {
      $ball.style.top = `${(top -= 2)}%`;
    }

    if (e.key === "s" && top <= 85) {
      $ball.style.top = `${(top += 2)}%`;
    }

    if (e.key === "a" && left > 2) {
      $ball.style.left = `${--left}%`;
    }

    if (e.key === "d" && left <= 94) {
      $ball.style.left = `${++left}%`;
    }
  });
}
