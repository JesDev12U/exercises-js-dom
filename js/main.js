import hamburgerFunction from "./hamburger.js";
import clock from "./clock.js";
import alarm from "./alarm.js";
import ballFun from "./ball.js";
import countdown from "./countdown.js";
import upScroll from "./up_scroll.js";
import darkLight from "./dark_light.js";
import responsive from "./responsive.js";

document.addEventListener("DOMContentLoaded", () => {
  hamburgerFunction("#hamburger", ".nav", ".hamburger-container");
  clock("#clock", "#init-clock", "#stop-clock");
  alarm("#init-alarm", "#stop-alarm");
  ballFun(".ball");
  countdown("#countdown", "#message", new Date(2024, 3, 22));
  upScroll(".up");
  responsive(
    "youtube",
    "(max-width: 1000px)",
    `<a href="https://youtu.be/J29Ls9i50Ew?si=ChlbB83n8XVjR27_" target="_blank">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/J29Ls9i50Ew?si=wcGr2UacD5In8jjv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  );
  responsive(
    "gmaps",
    "(max-width: 1000px)",
    `<a href="https://maps.app.goo.gl/tKNWQwCZariHfqae6" target="_blank">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.3822354361732!2d-99.09442779045852!3d19.395883981800136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc2e3efc321b%3A0xabf8454acb3a3a99!2sUPIICSA%20%E2%80%93%20Unidad%20Profesional%20Interdisciplinaria%20de%20Ingenier%C3%ADa%20y%20Ciencias%20Sociales%20y%20Administrativas%20IPN!5e0!3m2!1ses-419!2smx!4v1712370592862!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
});

darkLight(".dark-light", ".main", ".back-ball");
