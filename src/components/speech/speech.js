let voices = [];
export async function speak(text, language = "Google US English") {
    if (voices.length === 0) {
        voices = await speechSynthesis.getVoices();
    }
    var msg = new SpeechSynthesisUtterance();

    // Set the text.
    msg.text = text;

    // Set the attributes.
    msg.volume = parseFloat(20);
    msg.rate = parseFloat(0.5);
    msg.pitch = parseFloat(1);


    for(let i = 0; i < voices.length ; i++) {
        if(voices[i].name === language) {
            msg.voice = voices[i];
        }
    }

    // Queue this utterance.
    window
        .speechSynthesis
        .speak(msg);
};