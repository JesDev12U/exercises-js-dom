export default function lottery(elements, btn) {
  const random = (lengthArray) => Math.floor(Math.random() * lengthArray);

  let $elements = document.querySelectorAll(`${elements} *`);
  let array = [];
  $elements.forEach((el) => {
    array.push(el.textContent);
  });
  // console.log(array[random(array.length)]);

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      alert(`El ganador es: ${array[random(array.length)]}`);
    }
  });
}
