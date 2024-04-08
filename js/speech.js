export default function speechReader() {
  const $speechSelect = document.getElementById("speech-select");
  const $speechTextArea = document.getElementById("speech-text");
  const $speechButton = document.getElementById("speech-button");
  const speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  document.addEventListener("DOMContentLoaded", (e) => {
    window.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = window.speechSynthesis.getVoices();
      voices.forEach((voice) => {
        const $option = document.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} - ${voice.lang}`;

        $speechSelect.appendChild($option);
      });
    });
  });
  document.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target === $speechButton) {
      speechMessage.text = $speechTextArea.value;
      window.speechSynthesis.speak(speechMessage);
    }
  });
}
