export default function onOffLine() {
  const divOffline = document.createElement("div");
  window.addEventListener("online", () => {
    if (document.body.contains(divOffline))
      document.body.removeChild(divOffline);
    const div = document.createElement("div");
    div.textContent = "Conexión establecida";
    div.classList.add("online");
    document.body.insertAdjacentElement("afterbegin", div);
    setTimeout(() => document.body.removeChild(div), 1500);
  });

  window.addEventListener("offline", () => {
    divOffline.textContent = "Conexión perdida";
    divOffline.classList.add("offline");
    document.body.insertAdjacentElement("afterbegin", divOffline);
  });
}
