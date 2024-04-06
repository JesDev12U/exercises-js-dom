export default function webcam(idVideo) {
  const $video = document.getElementById(idVideo);
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      $video.srcObject = stream;
      $video.play();
    })
    .catch(() => {
      $video.insertAdjacentHTML(
        "beforebegin",
        "<p>¡Da los permisos para la cámara!</p>"
      );
    });
}
