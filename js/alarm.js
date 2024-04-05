export default function alarm(initAlarm, stopAlarm) {
  const $initAlarm = document.querySelector(initAlarm);
  let audio = new Audio("../sounds/alarm.mp3");
  document.addEventListener("click", (e) => {
    if (e.target.matches(initAlarm)) {
      $initAlarm.disabled = true;
      audio.play();
    }

    if (e.target.matches(stopAlarm)) {
      $initAlarm.disabled = false;
      audio.pause();
      audio = new Audio("../sounds/alarm.mp3");
    }
  });
}
