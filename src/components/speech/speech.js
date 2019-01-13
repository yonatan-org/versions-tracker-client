export async function speak(text, language) {

    let voices = await speechSynthesis.getVoices();
    var msg = new SpeechSynthesisUtterance();

    // Set the text.
    msg.text = text;

    // Set the attributes.
    msg.volume = parseFloat(20);
    msg.rate = parseFloat(0.9);
    msg.pitch = parseFloat(1);


    msg.voice = voices.filter(function (voice) {
        return voice.name === language;
    })[0];

    // Queue this utterance.
    window
        .speechSynthesis
        .speak(msg);
};