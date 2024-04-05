const differenceDates = (date1, date2) => {
  let difference = Math.abs(date1 - date2);
  let seconds = Math.floor(difference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  return { days, hours, minutes, seconds };
};

export default function countdown(count, message, date) {
  const $count = document.querySelector(count);
  const $message = document.querySelector(message);
  let interval = setInterval(() => {
    let difference = differenceDates(date, new Date());
    $count.textContent = `${difference.days} días ${difference.hours} horas ${difference.minutes} 
    minutos ${difference.seconds} segundos`;

    if (
      difference.days === 0 &&
      difference.hours === 0 &&
      difference.minutes === 0 &&
      difference.seconds === 0
    ) {
      $message.style.display = "block";
      clearInterval(interval);
    }
  }, 1000);
}
