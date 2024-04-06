export default function getGeololatitation(idContainer) {
  const $div = document.getElementById(idContainer);

  const options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const sucess = (position) => {
    $div.innerHTML = `<p>
    <ul>
        <li>Latitud: ${position.coords.latitude}</li>
        <li>Longitud: ${position.coords.longitude}</li>
        <li>Precisión: ${position.coords.accuracy} metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    </p>`;
  };

  const error = (err) => {
    $div.innerHTML = `<p>Error: ${err.message}</p>`;
  };

  navigator.geolocation.getCurrentPosition(sucess, error, options);
}
