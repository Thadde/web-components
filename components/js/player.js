document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('customAudioPlayer');
  const turningButton = document.getElementById('turningButton');

  turningButton.addEventListener('click', function () {
      toggleAudio();
  });

  function toggleAudio() {
      if (audioPlayer.paused) {
          playAudio();
      } else {
          pauseAudio();
      }

      updateTurningButton();
  }

  function playAudio() {
      audioPlayer.play();
  }

  function pauseAudio() {
      audioPlayer.pause();
  }

  function updateTurningButton() {
      turningButton.textContent = audioPlayer.paused ? 'Play' : 'Pause';
  }

  
});
