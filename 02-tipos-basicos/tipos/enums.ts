(() => {
  enum AudioLevel {
    min = 5,
    medium,
    medium2,
    max = 10
  };

  let currentAudio = AudioLevel.medium;
  console.log(AudioLevel);
  console.log(currentAudio);
})();