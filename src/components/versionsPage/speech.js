// Create a new utterance for the specified text and add it to the queue.

const getVoices = () => {
    return new Promise((resolve, reject) => {
        var interval = setInterval(() => {
            const voices = speechSynthesis.getVoices();
            if (voices.length > 0) {
                clearInterval(interval);
                resolve(voices);
            }
        }, 50)
    })
}

function speak(text) {

    getVoices().then((voices) => {
        // Create a new instance of SpeechSynthesisUtterance.
        var msg = new SpeechSynthesisUtterance();

        // Set the text.
        msg.text = text;

        // Set the attributes.
        msg.volume = parseFloat(10);
        msg.rate = parseFloat(1);
        msg.pitch = parseFloat(1);

        msg.voice = voices.filter(function (voice) {
            return voice.name == "Google US English";
        })[0];

        // Queue this utterance.
        window
            .speechSynthesis
            .speak(msg);
    })

}

module.exports = speak;
