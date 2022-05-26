"use strict";
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 5] = "min";
        AudioLevel[AudioLevel["medium"] = 6] = "medium";
        AudioLevel[AudioLevel["medium2"] = 7] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    ;
    var currentAudio = AudioLevel.medium;
    console.log(AudioLevel);
    console.log(currentAudio);
})();
