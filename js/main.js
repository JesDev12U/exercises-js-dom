import hamburgerFunction from "./hamburger.js";
import clock from "./clock.js";
import alarm from "./alarm.js";
import ballFun from "./ball.js";

document.addEventListener("DOMContentLoaded", () => {
  hamburgerFunction("#hamburger", ".nav", ".hamburger-container");
  clock("#clock", "#init-clock", "#stop-clock");
  alarm("#init-alarm", "#stop-alarm");
  ballFun(".ball");
});
