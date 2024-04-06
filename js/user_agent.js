export default function userAgent(container) {
  const ua = navigator.userAgent;
  const $container = document.querySelector(container);

  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    any: function () {
      return this.android() || this.ios();
    },
  };

  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac/i),
    windows: () => ua.match(/windows/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };

  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    edge: () => ua.match(/edge/i),
    opera: () => ua.match(/opera/i),
    firefox: () => ua.match(/firefox/i),
    safari: () => ua.match(/safari/i),
    any: function () {
      return (
        this.chrome() ||
        this.edge() ||
        this.opera() ||
        this.firefox() ||
        this.safari()
      );
    },
  };

  $container.innerHTML = `
    <ul>
      <li>User agent: ${ua}</li>
      <li>Navegador: ${isBrowser.any()}</li>
      <li>Plataforma: ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
    </ul>
  `;

  if (isMobile.android())
    $container.innerHTML += `<p>Descarga nuestra app para android</p>`;
  else if (isMobile.ios())
    $container.innerHTML += `<p>Descarga nuestra app para IOS</p>`;
  else if (isDesktop.windows())
    $container.innerHTML += `<p>Descarga nuestra app para Windows</p>`;
  else if (isDesktop.mac())
    $container.innerHTML += `<p>Descarga nuestra app para Mac OS</p>`;
  else if (isDesktop.linux())
    $container.innerHTML += `<p>Descarga nuestra app para Linux</p>`;
}
