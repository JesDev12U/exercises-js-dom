export default function responsive(
  id,
  mediaQuery,
  contentMobile,
  contentDesktop
) {
  const breakpoint = window.matchMedia(mediaQuery);

  const applyChanges = () => {
    if (breakpoint.matches) {
      document.getElementById(id).innerHTML = contentMobile;
    } else {
      document.getElementById(id).innerHTML = contentDesktop;
    }
  };

  breakpoint.addEventListener("change", applyChanges);
  applyChanges();
}
