export default function responsiveTester(form) {
  const $form = document.getElementById(form);
  let testerWindow;
  document.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      testerWindow = window.open(
        $form.url.value,
        "tester",
        `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`
      );
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === $form.close) {
      e.preventDefault();
      testerWindow.close();
    }
  });
}
