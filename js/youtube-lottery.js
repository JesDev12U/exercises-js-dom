const regex = /@[a-z]/i;

document
  .querySelectorAll(
    "span.style-scope.ytd-comment-view-model.style-scope.ytd-comment-view-model"
  )
  .forEach((el) => {
    if (regex.test(el.textContent)) {
      console.log(el.textContent.replace(/\s/g, ""));
    }
  });
