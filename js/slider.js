export default function slider(slide, buttonsContainer, idPrev, idNext) {
  const $slide = document.querySelectorAll(slide);
  document.addEventListener("click", (e) => {
    if (e.target.matches(`${buttonsContainer} ${idPrev}`)) {
      e.preventDefault();
      let pos;
      $slide.forEach((el, i, array) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
          pos = i === 0 ? array.length - 1 : i - 1;
        }
      });
      $slide[pos].classList.add("active");
    }

    if (e.target.matches(`${buttonsContainer} ${idNext}`)) {
      e.preventDefault();
      let pos;
      $slide.forEach((el, i, array) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
          pos = i === array.length - 1 ? 0 : i + 1;
        }
      });
      $slide[pos].classList.add("active");
    }
  });
}
