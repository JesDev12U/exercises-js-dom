export default function clock(clock, initClock, stopClock) {
  const $clock = document.querySelector(clock);
  const $initClock = document.querySelector(initClock);
  const $stopClock = document.querySelector(stopClock);

  setInterval(() => {
    const time = new Date();
    // const hours =
    //   time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    // const minutes =
    //   time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    // const seconds =
    //   time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    // const strClock = `${hours}:${minutes}:${seconds}`;
    $clock.textContent = time.toLocaleTimeString();
  }, 1000);

  document.addEventListener("click", (e) => {
    if (e.target.matches(initClock)) {
      $initClock.disabled = true;
      $clock.style.display = "block";
    }

    if (e.target.matches(stopClock)) {
      $initClock.disabled = false;
      $clock.style.display = "none";
    }
  });
}
